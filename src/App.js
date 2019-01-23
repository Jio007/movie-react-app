import React, { Component } from 'react';
import './App.css';
import Home from './components/Home/Home';
import Header from './containers/Header/Header'
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from './store/reducer';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      search: ''
    }
  }

  onSearchMovie = search => this.setState( {search} );

  render() {
    const {search} = this.state;
    const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
    return (
      <Provider store={store}>
          <Header searchMovie={this.onSearchMovie} />
          <Home name={search}/>
      </Provider>
    );
  }
}

export default App;
