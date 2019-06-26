import movies from "../api/movies";
import {
  FETCH_MOVIES,
  FETCH_MOVIE,
  FETCH_INITIAL,
  GET_CONFIG,
  GET_GENRES,
  SET_LOADING,
  REMOVE_LOADING,
  FETCH_MOVIES_BY_GENRE,
  CLEAR_MOVIE
} from "./types";

const api_key = "?api_key=a2986eaf427243d1e89aafc1fc124089";

// action creator to get config from api

export const getConfig = () => async dispatch => {
  const response = await movies.get("/configuration" + api_key);
  dispatch({
    type: GET_CONFIG,
    payload: response.data
  });
};

// get genres from api

export const getGenres = () => async dispatch => {
  const response = await movies.get("/genre/movie/list" + api_key);
  dispatch({
    type: GET_GENRES,
    payload: response.data
  });
};

// init app
export const init = () => async dispatch => {
  console.log('init')
  dispatch({ type: SET_LOADING });
  await dispatch(getConfig());
  await dispatch(getGenres());
  dispatch({ type: REMOVE_LOADING });
};

// fetch trending movies when app movie list loads
export const fetchInitial = () => async dispatch => {
  const response = await movies.get("/trending/movie/week" + api_key);
  dispatch({
    type: FETCH_INITIAL,
    payload: response.data.results
  });
};

// search for movies from api

export const fetchMovies = query => async dispatch => {
  if (query) {
    const response = await movies.get(`/search/movie` + api_key, {
      params: {
        query
      }
    });
    dispatch({
      type: FETCH_MOVIES,
      payload: response.data.results
    });
  } else {
    return null;
  }
};

// fetch movie by id for movie view page

export const fetchMovie = id => async dispatch => {
  console.log('getting movie')
  const response = await movies.get(`/movie/${id}` + api_key);
  dispatch({
    type: FETCH_MOVIE,
    payload: response.data
  });
};

// Search movies by genre ID

export const fetchMoviesByGenre = genreId => async dispatch => {
  
  const response = await movies.get("/discover/movie" + api_key, {
    params: {
      with_genres: genreId
    }
  });
  dispatch({
    type: FETCH_MOVIES_BY_GENRE,
    payload: response.data.results
  });
};

// clear movie for ffresh page

export const clearMovie = () => {
  return {
    type: CLEAR_MOVIE
  }
}
