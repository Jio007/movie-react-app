import React from 'react'
import './Movie.scss';

// Define Movie as a Functional component
const MovieComponent = (props) => {
  const posterPath = "http://image.tmdb.org/t/p/w300/" + props.movie.poster_path;
  return (
    <div className="movie">
      <img src={posterPath} alt="poster-path" />
      <div className="container" >
        <h4> <b> { props.movie.title } </b> </h4>
        <p> { props.movie.vote_average } </p>  
      </div>
    </div>
  );
}

export default MovieComponent;
