import React, { Component } from 'react';
import { DropTarget } from 'react-dnd';

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop(),
  };
}

const holderTarget = {
  drop(props, monitor) {
    props.changePosition(props.currentPosition);
  }
};

class WidgetHolder extends Component {
  render() {
    const {connectDropTarget, isOver, canDrop, currentPosition, widgetPosition } = this.props;
    return connectDropTarget(
      <div className={"col-md mb-2 holder " + (canDrop ? "visible " : "") + (isOver ? "highlight " : "") }>
        {canDrop && !(currentPosition === widgetPosition) && <h4 className="drop-here">Drop Here</h4>}
        {canDrop && (currentPosition === widgetPosition) && <h4 className="drop-here">Put Back Here</h4>}
        {this.props.children}
      </div>
    )
  }
}

export default DropTarget('widget', holderTarget, collect)(WidgetHolder)
