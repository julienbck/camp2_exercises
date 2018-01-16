import React, { Component } from 'react';
import './App.css';{Component}

class Chat extends Component {
  render(){
    return(
      <div>
      <h1>Hi {this.props.username}</h1>
      <p>Message {this.props.message}</p>
      </div>
    );
  }
}


export default Chat;
