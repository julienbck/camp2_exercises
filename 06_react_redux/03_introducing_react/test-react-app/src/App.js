import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
          <h1 className="App-title">Hello {this.props.test} ! </h1>
    );
  }
}

export default App;
