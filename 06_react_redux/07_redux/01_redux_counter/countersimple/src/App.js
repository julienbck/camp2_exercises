import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      counter: 0
    }
  }
  increment1 = () => {
    this.setState({
      counter: this.state.counter + 1
    })
  }
  decrement1 = () => {
    this.setState({
      counter: this.state.counter - 1
    })
  }
  increment10 = () => {
    this.setState({
      counter: this.state.counter + 10
    })
  }
  decrement10 = () => {
    this.setState({
      counter: this.state.counter - 10
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
        <button onClick={this.decrement10}> - by 10</button>
          <button onClick={this.decrement1}> - by 1 </button>
          <span>{this.state.counter}</span>
          <button onClick={this.increment1}>+ by 1</button>
          <button onClick={this.increment10}>+ by 10</button>
        </p>
      </div>
    );
  }
}

export default App;
