import * as types from './types';
import _ from 'lodash';

const INITIAL_STATE = {
  links: null,
  loading: false,
  error: null
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.SET_LINKS:
      return {
        ...state,
        links: action.payload
      };
    case types.SET_LOADING:
      return {
        ...state,
        loading: action.payload
      };
    case types.SET_ERROR:
      return {
        ...state,
        error: action.payload
      };
    case types.SORT_LINKS:
      return {
        ...state,
        links: _.sortBy(state.links, [action.payload]).reverse()
      };
    case types.DELETE_LINK:
      return {
        ...state,
        links: state.links.filter(link => link.id !== action.payload)
      };
    case types.FILTER_LINKS:
      return {
        ...state,
        links: state.links.map(link =>
          link.title.toLowerCase().includes(action.payload.toLowerCase())
            ? { ...link, hidden: false }
            : { ...link, hidden: true }
        )
      };
    default:
      return state;
  }
};

export default reducer;
