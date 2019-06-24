import React from "react";
import Header from "./Header";
import MovieList from "./MovieList";
import Sidebar from "./Sidebar";

const App = () => {
  return (
    <>
      <Sidebar />
      <Header />
      <div className="ui segment">
        <MovieList />
      </div>
    </>
  );
};

export default App;
