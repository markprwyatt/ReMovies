import React, { useEffect } from "react";
import { fetchMovie, init, clearMovie } from '../../actions/index';
import { connect } from "react-redux";

const MovieViewPage = ({config, fetchMovie, init, history, match, movie}) => {
  useEffect(() => {
    clearMovie()
    init()
    fetchMovie(match.params.id)
  }, []);

// eslint-disable-next-line

  

    if (config.base && movie) {
      return  <img src={`${config.base.images.base_url}/w154${movie.poster_path}`} alt="movie poster"/>  
    }
  //  return <div>
    //      <img src={`${baseURL}/${size}${movie.poster_path}`} alt="movie poster"/>   
    //</div>;
  // } else { 
     return <div>Loading...</div>
  
};

const mapStateToProps = ({movie, config}) => {

  return {
    movie,
    config
   
  };
};

export default connect(
  mapStateToProps,
  { fetchMovie,
  init,
  clearMovie}
)(MovieViewPage);

