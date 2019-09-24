import { AuthActionTypes } from './auth.types';

const INITIAL_STATE = {
  isAuthenticated: false,
  isAuthenticating: true,
  user: null,
  error: null
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AuthActionTypes.SET_AUTHENTICATING:
      return {
        ...state,
        isAuthenticating: action.payload
      };
    case AuthActionTypes.SET_AUTHENTICATED:
      return {
        ...state,
        isAuthenticated: action.payload
      };
    case AuthActionTypes.SET_USER:
      return {
        ...state,
        user: action.payload
      };
    case AuthActionTypes.SET_ERROR:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};

export default authReducer;
