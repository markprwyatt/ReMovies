import configReducer from "./configReducer";
import moviesReducer from "./moviesReducer";
import { combineReducers } from "redux";
import { reducer as burgerMenu } from "redux-burger-menu";

export default combineReducers({
  movies: moviesReducer,
  config: configReducer,
  burgerMenu
});
