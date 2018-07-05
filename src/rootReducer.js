import { combineReducers } from 'redux';

import dataReducer from './dashboard/reducers';

export default combineReducers({
  data: dataReducer
})

