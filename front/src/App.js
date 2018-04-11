import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import Side from './Containers/Side';
import Main from './Containers/Main';

class App extends Component {
  render() {
    return (
      <div>
        <Side/>
        <Main/>
      </div>
    );
  }
}

export default App;
