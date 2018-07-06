import React from 'react';
import { Card, CardBody, CardHeader, ListGroup, ListGroupItem, Progress } from 'reactstrap';

import DropDown from './DropDown';

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

export default ({ data, showUsersWidget }) => {
  if (!data) return null;
  return (
    <Card size="sm" style={{ zIndex: 2 }}>
      <CardHeader>
        <span className="title">Users activity</span>
        <div>
          <span className="weekly">Weekly <img alt="Down Arrow" src={downArrow}/></span>
          <span className="more"><DropDown deleteWidget={showUsersWidget}/></span>
        </div>
      </CardHeader>
      <CardBody>
        <ListGroup>
          {data.map(user => (
            <ListGroupItem key={user.id}>
              <div className="avatar">
                <img alt={user.name} src={avatars[user.id]}/>
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
  );
};
