import configReducer from "./configReducer";
import moviesReducer from "./moviesReducer";
import movieReducer from './movieReducer';
import { combineReducers } from "redux";
import { reducer as burgerMenu } from "redux-burger-menu";

export default combineReducers({
  movies: moviesReducer,
  movie: movieReducer,
  config: configReducer,
  burgerMenu
});
