import React from "react";
import "./Sidebar.css";
import { slide as Menu } from "react-burger-menu";
import { decorator as reduxBurgerMenu } from "redux-burger-menu";
import { connect } from "react-redux";
import { fetchMoviesByGenre } from "../actions/index";

const ReduxBurgerMenu = reduxBurgerMenu(Menu);

const Sidebar = props => {
  const selectGenre = (e, genreId) => {
    e.preventDefault();
    console.log(e);
    props.fetchMoviesByGenre(genreId);
  };

  if (props.genres) {
    return (
      <ReduxBurgerMenu isOpen={props.isOpen} className="sidebar">
        {props.genres.map(genre => {
          return (
            <a
              id="home"
              className="menu-item"
              key={genre.id}
              href="/"
              onClick={e => selectGenre(e, genre.id)}>
              {genre.name}
            </a>
          );
        })}
      </ReduxBurgerMenu>
    );
  } else {
    return <ReduxBurgerMenu />;
  }
};

const mapStateToProps = ({ config }) => {
  return {
    genres: config.genres
  };
};

export default connect(
  mapStateToProps,
  {
    fetchMoviesByGenre
  }
)(Sidebar);
