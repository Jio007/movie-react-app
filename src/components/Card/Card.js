import React from 'react'
import './Card.scss';

// Define Card as a Functional component
const Card = (props) => {
  const posterPath = "http://image.tmdb.org/t/p/w400/" + props.entity.poster_path;
  return (
    <div className="card">
      <img src={posterPath} alt="poster-path" />
      <div className="container" >
        <h4> <b> { props.entity.title } </b> </h4>
        <p> { props.entity.vote_average } </p>  
      </div>
    </div>
  );
}

export default Card;
