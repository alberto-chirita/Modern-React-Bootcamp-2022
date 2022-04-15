import React, { Component } from "react";

export class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = { time: new Date() };
    console.log("IN CONSTRUCTOR!");
  }

  componentDidMount() {
    console.log("IN COMPONENT DID MOUNT!");
    this.timerID = setInterval(() => {
      this.setState({ time: new Date() });
    }, 1000);
  }

  render() {
    console.log("IN RENDER!");
    return <div>{this.state.time.getSeconds()}</div>;
  }
}

export default Timer;
