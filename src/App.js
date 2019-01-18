import React, { Component } from 'react';
import './App.css';
import MoviesComponent from './components/Movies/MoviesComponent';
import Header from './containers/Header/Header'

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      search: ''
    }
  }

  onSearchMovie = search => this.setState( {search} )

  render() {
    const {search} = this.state;
    return (
      <div className="App">
        <Header searchMovie={this.onSearchMovie} />
        <MoviesComponent name={search}/>
      </div>
    );
  }
}

export default App;
