import React, { Component } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import WidgetHolder from './WidgetHolder';
import Widget from './Widget';
import WidgetsContainer from './WidgetsContainer';

class Widgets extends Component {
  render() {
    const widgetCount = [
      [1,2,3],
      [4,5,6]
    ];
    const { widgetPosition, usersWidgetVisible } = this.props;
    return (
      <React.Fragment>
        {widgetCount.map((row, i) => (
          <div key={i} className="row">
            {row.map((position) => (
              <WidgetHolder key={position} currentPosition={position} {...this.props}>
                { usersWidgetVisible && position === widgetPosition && <Widget/>}
              </WidgetHolder>
            ))}
          </div>
        ))}
      </React.Fragment>
    )
  }
}

export default DragDropContext(HTML5Backend)(WidgetsContainer(Widgets));
