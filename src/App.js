import React, { Component } from 'react';
import './scss/styling.scss';

// components
import CardList from './components/CardList';

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
        <img alt="Studio Ghibli Logo" src="https://www.pngkit.com/png/detail/78-788474_filmography-studio-ghibli-logo-png.png" />
        <CardList movies={this.state.movies} />
      </div>
		)
	}
}

export default App;
