import React from 'react';


const MovieCard = ({ movie, baseURL }) => {
    if (movie) { 
     return (
    
    <div className="card">
  <div className="image">
    <img src={`${baseURL.images.base_url}/w500${movie.poster_path}`} alt="Movie Poster"/>
  </div>
  <div className="content">
    <a href="/" className="header">{movie.title}</a>
    <div className="description">
      {movie.overview}
    </div>
  </div>
  <div className="extra content">
    <a href="/">
      <i className="star icon"></i>
      {movie.vote_average}
    </a>
  </div>
</div>


  )
 }
}

export default MovieCard;


