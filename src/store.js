import { createStore, applyMiddleware, compose } from 'redux';
// import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import rootReducer from './rootReducer';

const initialState = {};
const enhancers = [];
const middleware = [thunk, createLogger({ collapsed: true })];

const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers);

export default createStore(rootReducer, initialState, composedEnhancers);
