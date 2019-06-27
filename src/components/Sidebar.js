import React from "react";
import "./Sidebar.css";
import { slide as Menu } from "react-burger-menu";
import { decorator as reduxBurgerMenu } from "redux-burger-menu";
import { connect } from "react-redux";
import { fetchMoviesByGenre } from "../actions/index";
import { Link } from "react-router-dom";

const ReduxBurgerMenu = reduxBurgerMenu(Menu);

const Sidebar = props => {
  const selectGenre = (e, genreId) => {
    props.fetchMoviesByGenre(genreId);
    console.log("Worked");
  };

  //

  if (props.genres) {
    return (
      <ReduxBurgerMenu isOpen={props.isOpen} className="sidebar">
        {props.genres.map(genre => {
          return (
            <Link to="/genres" className="menu-item" key={genre.id}>
              <span onClick={e => selectGenre(e, genre.id)}>{genre.name}</span>
            </Link>
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
