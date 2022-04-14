import React, { Component } from "react";

export class Box extends Component {
  handleClick = () => {
    this.props.removeBox(this.props.id);
  };

  render() {
    const style = {
      height: `${this.props.height}em`,
      width: `${this.props.width}em`,
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
