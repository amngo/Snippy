import { LinkActionTypes } from './link.types';
import axios from 'axios';
import config from '../../config';
import { Auth } from 'aws-amplify';

export const getLinksPending = status => {
  return {
    type: LinkActionTypes.GET_LINKS_PENDING,
    payload: status
  };
};

export const addLinkPending = status => {
  return {
    type: LinkActionTypes.ADD_LINK_PENDING,
    payload: status
  };
};

export const removeLinkPending = status => {
  return {
    type: LinkActionTypes.REMOVE_LINK_PENDING,
    payload: status
  };
};

export const updateLinkPending = status => {
  return {
    type: LinkActionTypes.UPDATE_LINK_PENDING,
    payload: status
  };
};

export const getLinks = () => {
  return async dispatch => {
    dispatch(getLinksPending(true));
    try {
      const session = await Auth.currentSession();
      const result = await axios.get(
        `https://cors-anywhere.herokuapp.com/${config.api.invokeUrl}/links`,
        { headers: { Authorization: session.idToken.jwtToken } }
      );
      dispatch(setLinks(result.data));
    } catch (error) {
      dispatch(setError(error));
    }
    dispatch(getLinksPending(false));
  };
};

export const setLinks = links => {
  return {
    type: LinkActionTypes.SET_LINKS,
    payload: links
  };
};

export const addLink = url => {
  return async dispatch => {
    dispatch(addLinkPending(true));
    try {
      const session = await Auth.currentSession();
      await axios.post(
        `https://cors-anywhere.herokuapp.com/${config.api.invokeUrl}/trim`,
        { url },
        { headers: { Authorization: session.idToken.jwtToken } }
      );
      dispatch(getLinks());
    } catch (error) {
      dispatch(setError(error));
    }
    dispatch(addLinkPending(false));
  };
};

export const removeLink = id => {
  return async dispatch => {
    dispatch(removeLinkPending(true));
    try {
      const session = await Auth.currentSession();
      await axios.delete(
        `https://cors-anywhere.herokuapp.com/${config.api.invokeUrl}/link/${id}`,
        { headers: { Authorization: session.idToken.jwtToken } }
      );
      dispatch(getLinks());
    } catch (error) {
      dispatch(setError(error));
    }
    dispatch(removeLinkPending(false));
  };
};

export const updateLink = id => {
  return async dispatch => {};
};

export const setError = error => {
  return {
    type: LinkActionTypes.SET_ERROR,
    payload: error
  };
};
