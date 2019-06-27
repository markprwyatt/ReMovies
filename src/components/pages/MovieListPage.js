import React, { useEffect } from "react";
import * as Scroll from "react-scroll";

import MovieList from "../MovieList";

const MovieListPage = () => {
  useEffect(() => {
    Scroll.animateScroll.scrollToTop(500);
  }, []);
  return (
    <div className="ui segment">
      <MovieList />
    </div>
  );
};

export default MovieListPage;
