import React, { Component } from "react";

export class Box extends Component {
  handleClick = () => {
    alert("Remove The Box!");
  };

  render() {
    const style = {
      height: this.props.height,
      width: this.props.width,
      backgroundColor: this.props.backgroundColor,
    };

    return (
      <div>
        <div className="Box" style={style}></div>
        <button onClick={this.handleClick}>Remove The Box!</button>
      </div>
    );
  }
}

export default Box;
