import * as types from './types';
import { LINKS } from '../../mock/Links';

export const setLoading = status => {
  return {
    type: types.SET_LOADING,
    payload: status
  };
};

export const setLinks = links => {
  return {
    type: types.SET_LINKS,
    payload: links
  };
};

export const setError = error => {
  return {
    type: types.SET_ERROR,
    payload: error
  };
};

export const sortLinks = property => {
  return {
    type: types.SORT_LINKS,
    payload: property
  };
};

export const deleteLink = id => {
  return {
    type: types.DELETE_LINK,
    payload: id
  };
};

export const filterLinks = query => {
  return {
    type: types.FILTER_LINKS,
    payload: query
  };
};

export const getLinks = () => {
  return async dispatch => {
    dispatch(setLoading(true));
    const sleep = () => new Promise(resolve => setTimeout(resolve, 2000));
    try {
      await sleep();
      const l = LINKS.map(link => {
        return {
          ...link,
          hidden: false
        };
      });
      dispatch(setLinks(l));
    } catch (error) {
      dispatch(setError(error));
    }
    dispatch(setLoading(false));
  };
};
