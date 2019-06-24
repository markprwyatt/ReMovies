import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchInitial, init } from "../actions";
import MovieCard from "./MovieCard";

class MovieList extends Component {
  componentDidMount() {
    this.props.fetchInitial();
    this.props.init();
  }

  renderMovieCards() {
    if (this.props.baseURL && this.props.baseURL.images)
      return this.props.movies.map(movie => (
        <MovieCard baseURL={this.props.baseURL} key={movie.id} movie={movie} />
      ));
  }

  render() {
    if (this.props.movies) {
      return <div className="ui link cards">{this.renderMovieCards()}</div>;
    }

    return <div>Loading...</div>;
  }
}

const mapStateToProps = ({ movies, config }) => {
  return {
    movies: movies,
    baseURL: config.base,
    genres: config.genres
  };
};

export default connect(
  mapStateToProps,
  {
    fetchInitial,
    init
  }
)(MovieList);
