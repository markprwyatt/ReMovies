import React from "react";
import { connect } from "react-redux";
import { fetchMovies } from "../actions";
import "./Searchbar.css";

class Searchbar extends React.Component {
  state = { term: "" };

  onSearchSubmit = e => {
    e.preventDefault();
    this.props.fetchMovies(this.state.term);
  };

  render() {
    return (
      <div className="search-form">
        <form className="ui icon input" onSubmit={this.onSearchSubmit}>
          <input
            type="text"
            name="movie"
            placeholder="Search..."
            autoComplete="off"
            value={this.state.term}
            onChange={e => this.setState({ term: e.target.value })}
          />
          <i className="search link icon" onClick={this.onSearchSubmit} />
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    movies: state.movies
  };
};

export default connect(
  mapStateToProps,
  {
    fetchMovies
  }
)(Searchbar);
