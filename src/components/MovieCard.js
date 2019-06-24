import React from "react";
import { fetchMovie } from "../actions/index";
import { connect } from "react-redux";

const MovieCard = ({ movie, baseURL, fetchMovie }) => {
  if (movie) {
    return (
      <div className="card">
        <div className="image">
          <img
            src={`${baseURL.images.base_url}/w500${movie.poster_path}`}
            alt="Movie Poster"
          />
        </div>
        <div className="content">
          <a href="/" className="header">
            {movie.title}
          </a>
          <div className="description">{movie.overview}</div>
        </div>
        <div className="extra content">
          <a href="/">
            <i className="star icon" />
            {movie.vote_average}
          </a>
        </div>
      </div>
    );
  }
};

const mapStateToProps = ({ movies }) => {
  return {
    movies
  };
};

export default connect(
  mapStateToProps,
  {
    fetchMovie
  }
)(MovieCard);
