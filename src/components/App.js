import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import MovieListPage from "./pages/MovieListPage";
import MovieViewPage from "./pages/MovieViewPage";
import history from "./history";
import { ThemeProvider } from "styled-components";
import styled from 'styled-components';

const theme = {
  primary: "#373a47",
  secondary: "greenyellow",
  font: "sans-seriff",
  fontColor: "#d1d1d1"
};




const Div = styled.div`
  position: sticky;
  top: 0px;
  z-index: 1000;
`

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router history={history}>
        <Sidebar />
        <Div>
        <Header />
        </Div>
        <Switch>
          <Route path="/" exact component={MovieListPage} />
          <Route path="/movie/:id"  component={MovieViewPage} />
          <Route path="/genres" component={MovieListPage} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;

/*  */
