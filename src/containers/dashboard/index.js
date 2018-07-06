import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';

import Widgets from './widgets';
import AddWidget from './addWidget';

export default class Dashboard extends Component {
  render() {
    return (
      <Container className="dashboard">
        <Row>
          <Col>
            <div className="header">
              <h3>Team Dashboard</h3>
              <AddWidget/>
            </div>
            <Widgets/>
          </Col>
        </Row>
      </Container>
    )
  }
}
