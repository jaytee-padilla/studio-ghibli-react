import React, { Component } from 'react';
import './scss/styling.scss';

// components
import CardList from './components/CardList';
import SearchBar from './components/SearchBar';

class App extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      filteredMovies: [],
      inputValue: ''
    };
  }

  componentDidMount() {
    // grab all the studio ghibli films data from the api
    // store the film data in 'movies' property of this.state
    fetch('https://ghibliapi.herokuapp.com/films')
      .then(response => response.json())
      .then(films => this.setState({ movies: films, filteredMovies: films }))
      .catch(error => console.log("There was an error fetching data from the Studio Ghibli API"));
  }

  // functions
  handleSubmit = (event) => {
    event.preventDefault();

    // filter out movie titles that don't match the value being searched
    this.setState({
      filteredMovies: this.state.movies.filter(movie => movie.title.toLowerCase().includes(this.state.inputValue.toLowerCase()))
    });
  }

  handleChange = (event) => {
    this.setState({
      inputValue: event.target.value
    });
  }

  handleCardsReload = (event) => {
    this.setState({
      inputValue: '',
      filteredMovies: this.state.movies
    })
  }

	render() {
		return (
			<div className="App">
        <img alt="Studio Ghibli Logo" src="https://www.pngkit.com/png/detail/78-788474_filmography-studio-ghibli-logo-png.png" />

        <SearchBar
          inputValue={this.state.inputValue}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          handleCardsReload={this.handleCardsReload}
        />

        <CardList movies={this.state.filteredMovies} />
      </div>
		)
	}
}

export default App;
