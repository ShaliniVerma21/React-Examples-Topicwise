import React, { Component } from "react";

class Message extends Component {
  constructor() {
    super();
    this.state = {
      Message: "Welcome",
    };
  }

  changeMessage() {
    this.setState({
      Message: "Hii",
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.Message}</h1>
        <button onClick={() => this.changeMessage()}>Click Me</button>
      </div>
    );
  }
}

export default Message;