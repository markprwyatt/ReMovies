import { FETCH_MOVIE, CLEAR_MOVIE } from "../actions/types.js";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_MOVIE:
      return { ...action.payload };
    case CLEAR_MOVIE:
      return {};
    default:
      return state;
  }
};
