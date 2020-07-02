import React, { Component } from 'react';
import './App.css';

// components
import MovieList from './components/MovieList';

class App extends Component {
  constructor() {
    super();

    this.state = {
      movies: []
    };
  }

  componentDidMount() {
    // grab all the studio ghibli films data from the api
    // store the film data in 'movies' property of this.state
    fetch('https://ghibliapi.herokuapp.com/films')
      .then(response => response.json())
      .then(films => this.setState({ movies: films}))
      .catch(error => console.log("There was an error fetching data from the Studio Ghibli API"));
  }

	render() {
		return (
			<div className="App">
        <MovieList movies={this.state.movies} />
      </div>
		)
	}
}

export default App;
