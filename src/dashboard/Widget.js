import React, { Component } from 'react';
import { connect } from 'react-redux';
import { orderBy } from 'lodash';
import { Card, CardBody, CardHeader, ListGroup, ListGroupItem, Progress } from 'reactstrap';
import { DragSource } from 'react-dnd';

import DropDown from './DropDown';
import EditWidget from './EditWidget';
import { loadData, showUsersWidget } from "./actions"

import downArrow from '../assets/Arrowdown - icon - selected.svg';
import avatar1 from '../assets/user avatar 1.png';
import avatar2 from '../assets/User Avatar 2.png';
import avatar3 from '../assets/User Avatar 3.png';
import avatar4 from '../assets/User Avatar 4.png';
import avatar5 from '../assets/User Avatar 5.png';

const avatars = {
  "194888": avatar1,
  "194889": avatar2,
  "194890": avatar3,

  "194891": avatar4,
  "194892": avatar5,
  "194887": avatar1,
  "194893": avatar2
}

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
            <span className="title">Users activity</span>
            <div>
              <span className="weekly">Weekly <img src={downArrow}/></span>
              <span className="more"><DropDown deleteWidget={this.props.showUsersWidget}/></span>
            </div>
          </CardHeader>
          <CardBody>
            <ListGroup>
              {data.map(user => (
                <ListGroupItem key={user.id}>
                  <div className="avatar">
                    <img src={avatars[user.id]}/>
                  </div>
                  <div className="username">{user.name} {user.lastname}</div>
                  <div className="progress-holder">
                    <Progress color="success" value={Math.round(user.weekly)}/>
                    <div className="text-center">{Math.round(user.weekly)}%</div>
                  </div>
                </ListGroupItem>
              ))}
            </ListGroup>
          </CardBody>
        </Card>
        <EditWidget/>
      </div>
    );
  }
}

export default DragSource('widget', widgetSource, collect)(
  connect(state => ({ ...state.data }), { loadData, showUsersWidget })(Widget)
);
