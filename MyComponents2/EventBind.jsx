import React, { Component } from "react";

class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Hii",
    };

    // 3 way
    this.clickHandler = this.clickHandler.bind(this);
  }

  //   clickHandler() {
  //     this.setState({
  //       message: "Goodbye",
  //     });
  //     // console.log(this);
  //   }

  // 4 way
  clickHandler = () => {
    this.setState({
      message: "Goodbye",
    });
  };

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        {/* 1 way */}
        {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}
        {/* 2 way */}
        {/* <button onClick={() => this.clickHandler()}>Click</button> */}
        <button onClick={this.clickHandler}>Click</button>
      </div>
    );
  }
}

export default EventBind;