import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';

import { loadData, showUsersWidget, editWidget, changePosition } from "./actions";
import Widgets from '../../components/widgets/Widgets'
import AddWidget from '../../components/widgets/AddModal'

class Dashboard extends Component {
  render() {
    return (
      <Container className="dashboard">
        <Row>
          <Col>
            <div className="header">
              <h3>Team Dashboard</h3>
              <AddWidget {...this.props} />
            </div>
            <Widgets {...this.props} />
          </Col>
        </Row>
      </Container>
    )
  }
}

export default connect(
  ({ data }) => ({ ...data }),
  { loadData, showUsersWidget, editWidget, changePosition }
)(Dashboard)
