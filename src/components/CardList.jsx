import React from 'react';
import '../scss/styling.scss';

// components
import Card from './Card';

// displays each card's data that's passed in via props
const CardList = props => {
  return (
    <div className="card-list">
      {props.movies.map(ele => (
        <Card key={ele.id} movie={ele} />
      ))}
    </div>
  )
}

export default CardList;