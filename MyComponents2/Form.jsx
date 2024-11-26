import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      comments: "",
      topic: "React",
    };
  }

  handleUsername = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  handleComment = (event) => {
    this.setState({
      comments: event.target.value,
    });
  };

  handleTopic = (event) => {
    this.setState({
      topic: event.target.value,
    });
  };

  handleSubmit = (event) => {
    alert(
      `Username: ${this.state.username}, Comment: ${this.state.comments}, Topic: ${this.state.topic}`
    );
    event.preventDefault();
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Username</label>
            <input
              type="text"
              value={this.state.username}
              onChange={this.handleUsername}
            />
          </div>
          <div>
            <label>Comment</label>
            <textarea
              type="text"
              value={this.state.comments}
              onChange={this.handleComment}
            ></textarea>
          </div>
          <div>
            <label>Topic</label>
            <select value={this.state.topic} onChange={this.handleTopic}>
              <option value="react">React</option>
              <option value="angular">Angular</option>
              <option value="vue">Vue</option>
            </select>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;