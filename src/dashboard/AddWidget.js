import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, ListGroup, ListGroupItem } from 'reactstrap';
import WidgetsContainer from './WidgetsContainer';

import ActivityImg from '../assets/users activity widget picture.png'

class AddWidget extends React.Component {
  state = {
    modal: false,
    showUsersWidget: undefined,
    addButtonVisible: !this.props.usersWidgetVisible
  }

  addUsersWidget = () => {
    this.toggleUsersWidget()
    this.setState({ showUsersWidget: true })
  }
  removeUsersWidget = () => {
    this.toggleUsersWidget()
    this.setState({ showUsersWidget: false })
  }

  toggleUsersWidget =  () => this.setState({ addButtonVisible: !this.state.addButtonVisible})
  toggle = () => this.setState({ modal: !this.state.modal })
  save = () => {
    this.toggle();
    this.props.showUsersWidget(this.state.showUsersWidget)
  }

  componentDidUpdate(prevProps) {
    if (prevProps.usersWidgetVisible && this.props.usersWidgetVisible !== prevProps.usersWidgetVisible) {
      this.setState({ addButtonVisible: !this.props.usersWidgetVisible })
    }
  }

  render() {
    return (
      <div>
        <Button color="primary" onClick={this.toggle}>Add Widget</Button>
        <Modal size="lg" isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Add a widget</ModalHeader>
          <ModalBody>
            <ListGroup>
              <ListGroupItem>
                <div className="addWidget">
                  <div className="activity-img">
                    <img src={ActivityImg}/>
                  </div>
                  <div className="details">
                    <h6>User's Activity</h6>
                    <b>By TimeDoctor</b>
                    <p>User's who worked more or less than their minimum hours required in daily, weekly and monthly.</p>
                  </div>
                </div>
                {
                  this.state.addButtonVisible
                    ? <Button color="primary" onClick={this.addUsersWidget}>+ Add Widget</Button>
                    : <Button color="danger" onClick={this.removeUsersWidget}>- Remove Widget</Button>
                }
              </ListGroupItem>
            </ListGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>{' '}
            <Button color="primary" onClick={this.save}>Save</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default WidgetsContainer(AddWidget);
