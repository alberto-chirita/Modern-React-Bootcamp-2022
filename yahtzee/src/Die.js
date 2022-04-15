import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
  static defaultProps = {
    numberWords: ["one", "two", "three", "four", "five", "six"],
  };

  handleClick = () => {
    this.props.handleClick(this.props.idx);
  };

  render() {
    const { numberWords, locked, val, disabled, rolling } = this.props;

    let classes = `Die fa-solid fa-dice-${numberWords[val - 1]} fa-5x`;
    classes += locked ? " Die-locked" : "";
    classes += rolling ? " Die-rolling" : "";

    return (
      <i className={classes} onClick={this.handleClick} disabled={disabled}></i>
    );
  }
}

export default Die;
