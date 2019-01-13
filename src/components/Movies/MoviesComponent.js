import React, { Component } from 'react'
import axios from 'axios';

import MovieComponent from './Movie/MovieComponent'
import './Movies.scss';

class MoviesComponent extends Component {
    constructor(props) {
        super(props);

        // Define state properties
        this.state = {
            movies: []
        };
    }

    componentDidMount() {
        axios.get('https://api.themoviedb.org/3/discover/movie?api_key=089dde2396217b62fb377d77459dbfa9')
            .then(data => {
                this.setState({
                    movies: data.data.results
                });
            });
    }
  
    render() {
        const { movies } = this.state;

        return (
            <div className="movies">
                {movies.map( movie =>
                    <MovieComponent movie={movie} key={movie.id}/>
                )}
            </div>
        )
    }
}

export default MoviesComponent;