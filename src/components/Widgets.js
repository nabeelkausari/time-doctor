import React, { Component } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import WidgetHolder from './WidgetHolder';
import UsersWidget from './UsersWidget';

class Widgets extends Component {
  render() {
    const widgetCount = [
      [1,2,3],
      [4,5,6]
    ];
    const { widgetPosition, usersWidgetVisible, changePosition } = this.props;
    return (
      <React.Fragment>
        {widgetCount.map((row, i) => (
          <div key={i} className="row">
            {row.map((position) => (
              <WidgetHolder key={position} changePosition={changePosition} currentPosition={position}>
                { usersWidgetVisible && position === widgetPosition && <UsersWidget {...this.props} />}
              </WidgetHolder>
            ))}
          </div>
        ))}
      </React.Fragment>
    )
  }
}

export default DragDropContext(HTML5Backend)(Widgets);
