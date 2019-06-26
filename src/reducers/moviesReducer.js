import {
  FETCH_MOVIES,
  FETCH_INITIAL,
  FETCH_MOVIES_BY_GENRE
} from "../actions/types";

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_INITIAL:
      return [...action.payload];
    case FETCH_MOVIES:
      return [...action.payload];
    case FETCH_MOVIES_BY_GENRE:
      return [...action.payload];
    default:
      return state;
  }
};
