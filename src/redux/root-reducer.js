import { combineReducers } from 'redux';

import authReducer from './auth/auth.reducer';
import linkReducer from './link/link.reducer';

export default combineReducers({
  auth: authReducer,
  link: linkReducer
});
