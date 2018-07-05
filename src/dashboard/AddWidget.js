import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, ListGroup, ListGroupItem } from 'reactstrap';
import WidgetsContainer from './WidgetsContainer';

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
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Add a widget</ModalHeader>
          <ModalBody>
            <ListGroup>
              <ListGroupItem>
                User's Activity
                {
                  this.state.addButtonVisible
                    ? <Button color="primary" onClick={this.addUsersWidget}>+ Add Widget</Button>
                    : <Button color="danger" onClick={this.removeUsersWidget}>- Remove Widget</Button>
                }
              </ListGroupItem>
            </ListGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.save}>Save</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default WidgetsContainer(AddWidget);
