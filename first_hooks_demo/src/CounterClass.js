import React, { Component } from "react";

export class CounterClass extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div className="CounterClass">
        <h1>The Count Is: {this.state.count}</h1>
        <button onClick={this.increment}>Add 1</button>
      </div>
    );
  }
}

export default CounterClass;
