import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { ModalHeader, Modal } from 'reactstrap';
import { connect } from 'react-redux';
import { editWidget } from '../actions';

import EditForm from '../../../components/EditWidgetForm';

class EditWidgetForm extends Component {

  handleFormSubmit = props => {
    this.props.editWidget(props);
    this.props.toggle();
  }

  render() {
    return (
      <Modal isOpen={this.props.modal} toggle={this.props.toggle}>
        <ModalHeader toggle={this.props.toggle}>Top highest time users</ModalHeader>
        <EditForm
          {...this.props}
          cancelAction={this.props.toggle}
          handleFormSubmit={this.handleFormSubmit}
        />
      </Modal>
    )
  }
}

function mapStateToProps(state) {
  return {
    ...state.data,
    initialValues: state.data.editData
  }
}

const editForm = reduxForm({
  form: 'editWidget'
})(EditWidgetForm);

export default connect(mapStateToProps, { editWidget })(editForm)
