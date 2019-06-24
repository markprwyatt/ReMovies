import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import Header from "./Header";
import MovieList from "./MovieList";
import Sidebar from "./Sidebar";
import MovieListPage from "./pages/MovieListPage";
import MovieViewPage from "./pages/MovieViewPage";
import history from "./history";

const App = () => {
  return (
    <>
      <Router history={history}>
        <Sidebar />
        <Header />
        <Switch>
          <Route path="/" exact component={MovieListPage} />
          <Route path="/movie/:id" exact component={MovieViewPage} />
        </Switch>
      </Router>
    </>
  );
};

export default App;

/* <div className="ui segment">
        <MovieList />
      </div> */
