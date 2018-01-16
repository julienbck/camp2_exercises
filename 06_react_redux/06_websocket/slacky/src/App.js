import React, { Component } from 'react';
import './App.css';
import Chat from './Chat.js';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      message: '',
      messages: [],
      user: []
    };
    this.updateUsername = this.updateUsername.bind(this);
    this.updateMessage = this.updateMessage.bind(this);
    this.updateBoardUsername = this.updateBoardUsername.bind(this);
  }
  componentDidMount() {
    // We open a connection from the client, related to the server
    const ws = new WebSocket("ws://localhost:4000");
    const nbUsersElem = document.getElementById("nbUsers");
    // What to do when we receive a message?
    ws.onmessage = (event) => {
      console.log("Message: " + event.data);
      nbUsersElem.innerHTML = event.data;
    };

    // Alert the server that the client is gone
    window.addEventListener("beforeunload", () => ws.send("CLOSE"));
  }
  updateUsername(event){
    this.setState({
      username: event.target.value
    });
  }
  updateMessage(message){
    this.setState({
      message: message.target.value,
      messages: this.state.messages + [message.target.value]
    });
  }
  updateBoardUsername (event){
    let push = this.state.users.push(event.target.value);
    this.setState({
      users: push
    })
  }
  render() {
    return(
      <div id="App">
      <p>There is <span id="nbUsers">0</span> users connected.</p>
        <form>
        <label>
        Username:
        <input type="text" onChange={this.updateUsername} value={this.state.username}></input>
        </label>
        <input type="submit" onClick={this.updateBoardUsername} value="Submit" />
        </form>
        <form>
        <label>
        Message:
        <input type="text" onClik={this.updateMessage} value={this.state.message}></input>
        </label>
        </form>
        <Chat username={this.state.username} message={this.state.message} />
        <h3>{this.state.messages}</h3>

        <h4>{this.state.users}</h4>
      </div>
    );
  }
}



export default App;
