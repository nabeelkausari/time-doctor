import React, { Component } from 'react';
import { orderBy } from 'lodash';
import { DragSource } from 'react-dnd';

import Widget from '../../../components/UsersWidget';

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

class UsersWidget extends Component {
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
    const { connectDragSource, isDragging, showUsersWidget } = this.props;
    const data = this.filterData()
    return connectDragSource(
      <div style={{
        opacity: isDragging ? 0.1 : 1,
        fontSize: 25,
        fontWeight: 'bold',
        cursor: 'move',
        zIndex: 1
      }}>
        <Widget data={data} showUsersWidget={showUsersWidget}/>
      </div>
    );
  }
}

export default DragSource('widget', widgetSource, collect)(UsersWidget);
