import React, { Component } from 'react';
import { Card, CardBody, CardTitle, CardHeader } from 'reactstrap';
import { DragSource } from 'react-dnd';

import DropDown from './DropDown';
import EditWidget from './EditWidget';

const widgetSource = {
  beginDrag(props) {
    return {};
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging()
  }
}

class Widget extends Component {
  render() {
    const { connectDragSource, isDragging } = this.props;
    return connectDragSource(
      <div style={{
        opacity: isDragging ? 0.5 : 1,
        fontSize: 25,
        fontWeight: 'bold',
        cursor: 'move'
      }}>
        <Card size="sm">
          <CardHeader>
            Users activity
            <span className="float-right"><DropDown/></span>
          </CardHeader>
          <CardBody>
            <CardTitle>Hello</CardTitle>
          </CardBody>
        </Card>
        <EditWidget/>
      </div>
    );
  }
}

export default DragSource('widget', widgetSource, collect)(Widget);
