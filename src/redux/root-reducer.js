import { combineReducers } from 'redux';

import linkReducer from './link';

export default combineReducers({
  link: linkReducer
});
