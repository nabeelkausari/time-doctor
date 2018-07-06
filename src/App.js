import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './config/store';
import Dashboard from './containers/dashboard';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Dashboard/>
      </Provider>
    );
  }
}
