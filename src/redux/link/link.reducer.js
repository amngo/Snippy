import { LinkActionTypes } from './link.types';

const INITIAL_STATE = {
  links: null,
  add_link_pending: false,
  remove_link_pending: false,
  update_link_pending: false,
  get_links_pending: false,
  error: null
};

const linkReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LinkActionTypes.SET_LINKS:
      return {
        ...state,
        links: action.payload
      };
    case LinkActionTypes.GET_LINKS_PENDING:
      return {
        ...state,
        get_links_pending: action.payload
      };
    case LinkActionTypes.ADD_LINK_PENDING:
      return {
        ...state,
        add_link_pending: action.payload
      };
    case LinkActionTypes.REMOVE_LINK_PENDING:
      return {
        ...state,
        remove_link_pending: action.payload
      };
    case LinkActionTypes.UPDATE_LINK_PENDING:
      return {
        ...state,
        update_link_pending: action.payload
      };
    case LinkActionTypes.SET_ERROR:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};

export default linkReducer;
