import React, { Component } from 'react';
import './App.scss';
import Side from './Containers/Side';
import uMain from './Containers/uMain';
import Post from './Containers/Post';
import Login from './Containers/Login';
import aMain from './Containers/aMain';
import {BrowserRouter as Router, Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <Side/>
        <Route exact path="/" component={uMain}/>
        <Route path="/post" component={Post}/>
        <Route path="/admin" component={aMain}/>
        <Route path="/login" component={Login}/>
      </div>
      </Router>
    );
  }
}

export default App;
