import React, { Component } from 'react';
import '../scss/styling.scss';

export default class MovieList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="movie-list">
        {this.props.movies.map(ele => (
          <div className="movie-card" key={ele.id}>
            <h1>{ele.title}</h1>
            <p>{ele.description}</p>
          </div>
        ))}
      </div>
    )
  }
}
