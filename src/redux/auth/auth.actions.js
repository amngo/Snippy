import { AuthActionTypes } from './auth.types';
import { Auth } from 'aws-amplify';

export const setAuthenticated = status => ({
  type: AuthActionTypes.SET_AUTHENTICATED,
  payload: status
});

export const setUser = user => ({
  type: AuthActionTypes.SET_USER,
  payload: user
});

export const setAuthenticating = status => ({
  type: AuthActionTypes.SET_AUTHENTICATING,
  payload: status
});

export const setError = error => ({
  type: AuthActionTypes.SET_ERROR,
  payload: error
});

export const loginUser = (history, username, password) => {
  return async dispatch => {
    try {
      dispatch(setAuthenticating(true));
      const user = await Auth.signIn(username, password);
      console.log(user);
      dispatch(setAuthenticated(true));
      dispatch(setUser(user));
      history.push('/dashboard');
    } catch (error) {
      let err = null;
      !error.message ? (err = { message: error }) : (err = error);
      dispatch(setError(err));
    }
    dispatch(setAuthenticating(false));
  };
};

export const logoutUser = history => {
  return async dispatch => {
    try {
      Auth.signOut();
      dispatch(setAuthenticated(false));
      dispatch(setUser(null));
    } catch (error) {
      console.log(error.message);
    }
    history.push('/login')
  };
};
