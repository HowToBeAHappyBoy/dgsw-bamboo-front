import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import Side from './Containers/Side';
import Main from './Containers/Main';
import Post from './Containers/Post';
import {BrowserRouter as Router, Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <Side/>
        <Route exact path="/" component={Main}/>
        <Route path="/post" component={Post}/>
      </div>
      </Router>
    );
  }
}

export default App;
