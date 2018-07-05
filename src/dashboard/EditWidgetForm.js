import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Button, ModalBody, ModalFooter } from 'reactstrap';
import { connect } from 'react-redux';
import { editWidget } from './actions';

class EditWidgetForm extends Component {
  handleFormSubmit = props => {
    this.props.editWidget(props);
    this.props.toggle();
  }

  render() {
    const { handleSubmit, cancelAction } = this.props;
    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit)}>
        <ModalBody className="editWidget">
          <fieldset className="form-group">
            <div>
              <label>Number of Users</label>
              <Field className="form-control" name="numberOfUsers" component="select">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </Field>
            </div>
          </fieldset>
          <fieldset className="form-group">
            <div className="row">
              <div className="col-md-12">
                <div className="form-group">
                  <label>Activity</label>
                  <div>
                    <div className="form-check form-check-inline">
                      <Field
                        className="form-check-input"
                        name="activity"
                        component="input"
                        type="radio"
                        value="highest"
                        id="highest"
                      />{' '}
                      <label className="form-check-label" htmlFor="highest">Highest</label>
                    </div>
                    <div className="form-check form-check-inline">
                      <Field
                        className="form-check-input"
                        name="activity"
                        component="input"
                        type="radio"
                        value="lowest"
                        id="lowest"
                      />{' '}
                      <label className="form-check-label" htmlFor="lowest">Lowest</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </fieldset>
          <fieldset className="form-group">
            <label>Time</label>
            <select className="form-control" defaultValue="1">
              <option />
              <option value="1">Mobile Time</option>
            </select>
          </fieldset>
          <fieldset className="form-group">
            <label>Date</label>
            <select className="form-control" defaultValue="1">
              <option />
              <option value="1">Weekly</option>
            </select>
          </fieldset>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={cancelAction}>Cancel</Button>{' '}
          <Button action="submit" color="primary">Save</Button>
        </ModalFooter>
      </form>
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
