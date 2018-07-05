import React, { Component } from 'react';
import { connect } from 'react-redux';
import { orderBy } from 'lodash';
import { Card, CardBody, CardHeader } from 'reactstrap';
import { DragSource } from 'react-dnd';

import DropDown from './DropDown';
import EditWidget from './EditWidget';
import { loadData } from "./actions"

const widgetSource = {
  beginDrag(props) {
    return {};
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging()
  }
}

class Widget extends Component {
  componentDidMount() {
    this.props.loadData()
  }
  filterData = () => {
    const { data: { users, weekly }, editData } = this.props;
    let combinedData = users.map(user => ({ ...user, weekly: weekly[user.id] }))
    let sortedUsers = orderBy(combinedData, 'weekly', editData.activity === "highest" ? "desc" : "asc")
    return sortedUsers.slice(0, editData.numberOfUsers)
  }
  render() {
    if (!this.props.data) return null;
    const { connectDragSource, isDragging } = this.props;
    const data = this.filterData()
    return connectDragSource(
      <div style={{
        opacity: isDragging ? 0.1 : 1,
        fontSize: 25,
        fontWeight: 'bold',
        cursor: 'move',
        zIndex: 1
      }}>
        <Card size="sm" style={{ zIndex: 2 }}>
          <CardHeader>
            Users activity
            <span className="float-right"><DropDown/></span>
          </CardHeader>
          <CardBody>
            <ul>
              {data.map(user => <li key={user.id}>{user.name} { user.weekly }</li>)}
            </ul>
          </CardBody>
        </Card>
        <EditWidget/>
      </div>
    );
  }
}

export default DragSource('widget', widgetSource, collect)(
  connect(state => ({ ...state.data }), { loadData })(Widget)
);
