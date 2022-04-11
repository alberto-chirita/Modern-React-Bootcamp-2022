import React, { Component } from "react";
import Box from "./Box";
import "./BoxesContainer.css";

export class BoxesContainer extends Component {
  static defaultProps = {
    allColors: ["purple", "magenta", "violet", "pink"],
    numBoxes: 16,
  };

  render() {
    const boxes = Array.from({ length: this.props.numBoxes }).map(
      (box, key) => <Box key={key} colors={this.props.allColors} />
    );
    return <div className="BoxesContainer">{boxes}</div>;
  }
}

export default BoxesContainer;
