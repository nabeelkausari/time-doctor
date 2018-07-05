import React, { Component } from 'react';
import { DropTarget } from 'react-dnd';

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
  };
}

const squareTarget = {
  drop(props, monitor) {
    props.changePosition(props.currentPosition);
  }
};

class WidgetHolder extends Component {
  render() {
    const {connectDropTarget, isOver, isDragging } = this.props;
    return connectDropTarget(
      <div className={"col-md-3 mb-4 holder " + (isOver ? "highlight" : "")}>
        {isDragging && <h4>Drop Here</h4>}
        {this.props.children}
      </div>
    )
  }
}

export default DropTarget('widget', squareTarget, collect)(WidgetHolder)
