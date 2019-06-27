import configReducer from "./configReducer";
import moviesReducer from "./moviesReducer";
import movieReducer from "./movieReducer";
import { combineReducers } from "redux";
import { reducer as burgerMenu } from "redux-burger-menu";
import creditsReducer from "./creditsReducer";

export default combineReducers({
  movies: moviesReducer,
  movie: movieReducer,
  credits: creditsReducer,
  config: configReducer,
  burgerMenu
});
