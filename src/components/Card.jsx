import React from 'react';
import '../scss/styling.scss';

const Card = props => {
  return (
    <div className="card">
      <h1>{props.movie.title}</h1>
      <p>{props.movie.description}</p>
    </div>
  )
}

export default Card;
