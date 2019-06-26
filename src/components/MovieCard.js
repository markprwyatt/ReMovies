import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const MovieCard = ({ movie, baseURL }) => {
  if (movie) {
    return (
      <Link to={`/movie/${movie.id}`} className="card">
        <div className="image">
          <img
            src={`${baseURL.images.base_url}/w500${movie.poster_path}`}
            alt="Movie Poster"
          />
        </div>
        <div className="content">
          <div href="/" className="header">
            {movie.title}
          </div>
          <div className="description">{movie.overview}</div>
        </div>
        <div className="extra content">
          <div href="/">
            <i className="star icon" />
            {movie.vote_average}
          </div>
        </div>
      </Link>
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
  {}
)(MovieCard);
