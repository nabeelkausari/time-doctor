import React from 'react';
import { Modal, ModalHeader } from 'reactstrap';

import EditWidgetForm from './EditWidgetForm';

export default class EditWidget extends React.Component {
  save = () => {
    this.props.toggle();
    this.props.editWidget()
  }

  render() {
    return (
      <Modal isOpen={this.props.modal} toggle={this.props.toggle} className={this.props.className}>
        <ModalHeader toggle={this.props.toggle}>Top highest time users</ModalHeader>
        <EditWidgetForm toggle={this.props.toggle} cancelAction={this.props.toggle}/>
      </Modal>
    );
  }
}
