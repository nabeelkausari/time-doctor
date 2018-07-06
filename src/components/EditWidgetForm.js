import React  from 'react';
import { Field } from 'redux-form';
import { Button, ModalBody, ModalFooter } from 'reactstrap';

export default props => {
  return (
    <form onSubmit={props.handleSubmit(props.handleFormSubmit)}>
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
        <Button color="secondary" onClick={props.cancelAction}>Cancel</Button>{' '}
        <Button action="submit" color="primary">Save</Button>
      </ModalFooter>
    </form>
  )
}
