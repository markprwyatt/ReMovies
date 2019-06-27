import { GET_CREDITS, CLEAR_MOVIE } from "../actions/types.js";

export default (state = [], action) => {
  switch (action.type) {
    case GET_CREDITS:
      return [...action.payload];
    case CLEAR_MOVIE:
      return [];
    default:
      return state;
  }
};
