import React, { Component } from "react";

export class SimpleFormClass extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "" };
  }

  handleClick = (e) => {
    this.setState({ email: e.target.value });
  };

  render() {
    return (
      <div>
        <h1>You entered: {this.state.email}</h1>
        <input
          type="text"
          value={this.state.email}
          onChange={this.handleClick}
        />
      </div>
    );
  }
}

export default SimpleFormClass;
