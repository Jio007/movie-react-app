import React, { Component } from 'react'
import './Header.scss';
import {connect} from 'react-redux'
import * as actionTypes from '../../store/actions'


class Header extends Component {
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
                    <input type="text" placeholder="Search.." onChange={this.props.onSearch} />
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        srch: state.search 
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onSearch: (e) => dispatch({type: actionTypes.SEARCH_MOVIE, text: e.target.value })
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
