import React, { Component } from 'react'
import axios from 'axios';

import Card from '../Card/Card'
import './Movies.scss';
 import {connect} from 'react-redux'

class Movies extends Component {
    constructor(props) {
        super(props);

        // Define state properties
        this.state = {
            movies: []
        };
    }

    componentDidUpdate(){
        if(this.props.srch && this.props.srch !== ''){
            axios.get('https://api.themoviedb.org/3/search/movie?api_key=089dde2396217b62fb377d77459dbfa9&query='+ this.props.srch)
            .then(data => {
                this.setState({
                    movies: data.data.results
                });
            });
        } else {
            axios.get('https://api.themoviedb.org/3/discover/movie?api_key=089dde2396217b62fb377d77459dbfa9')
            .then(data => {
                this.setState({
                    movies: data.data.results
                });
            });    
        }
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
                    <Card entity={movie} key={movie.id}/>
                )}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        srch: state.search
    }
};

export default connect(mapStateToProps)(Movies);