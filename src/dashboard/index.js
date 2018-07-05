import React, {Component} from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import WidgetsContainer from './Widgets'
import AddWidget from './AddWidget'

export default class App extends Component {
  render() {
    return (
      <Container className="dashboard">
        <Row>
          <Col>
            <div className="header">
              <h3>Team Dashboard</h3>
              <AddWidget/>
            </div>
            <WidgetsContainer/>
          </Col>
        </Row>
      </Container>
    )
  }
}
