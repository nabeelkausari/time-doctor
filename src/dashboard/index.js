import React, {Component} from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import WidgetsContainer from './Widgets'
import AddWidget from './AddWidget'

export default class App extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <h1>Team Dashboard</h1>
            <AddWidget/>
            <WidgetsContainer/>
          </Col>
        </Row>
      </Container>
    )
  }
}
