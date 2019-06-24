import {
  GET_CONFIG,
  GET_GENRES,
  SET_LOADING,
  REMOVE_LOADING
} from "../actions/types";

const INITIAL_STATE = {
  loading: true
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_CONFIG:
      return { ...state, base: action.payload };
    case GET_GENRES:
      return { ...state, ...action.payload };
    case SET_LOADING:
      return { ...state, loading: true };
    case REMOVE_LOADING:
      return { ...state, loading: false };
    default:
      return state;
  }
};
