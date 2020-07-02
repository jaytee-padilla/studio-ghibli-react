import React, { Component } from 'react';

export default class MovieList extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="movie-list">
        {this.props.movies.map(ele => (
          <div className="movie-card" key={ele.id}>
            <h3>{ele.title}</h3>
            <p>{ele.description}</p>
          </div>
        ))}
      </div>
    )
  }
}
