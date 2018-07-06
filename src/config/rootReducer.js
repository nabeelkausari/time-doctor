import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import dataReducer from '../containers/dashboard/reducers';

export default combineReducers({
  form: formReducer,
  data: dataReducer
})
