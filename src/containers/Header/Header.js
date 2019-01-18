import React, { Component } from 'react'
import './Header.scss';

export default class Header extends Component {
    constructor(props){
        super(props);

        this.state = {
            search: ''
        }
    }

    search = e => {
        const  { searchMovie } = this.props;

        searchMovie(e.target.value);
    };

    render() {
        return (
            <div className='header'>
                <div className="topnav">
                    <a className="active" href="#home">Home</a>
                    <a href="#movies">Movies</a>
                    <input type="text" placeholder="Search.." onChange={this.search} />
                </div>
            </div>
        )
    }
}
