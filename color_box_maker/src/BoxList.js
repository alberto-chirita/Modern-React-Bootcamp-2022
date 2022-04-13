import React, { Component } from "react";
import NewBoxForm from "./NewBoxForm";
import Box from "./Box";

export class BoxList extends Component {
  constructor(props) {
    super(props);
    this.state = { boxes: [] };
  }

  render() {
    return (
      <div>
        <h1>Color Box Maker</h1>
        <NewBoxForm />
        <Box height={150} width={200} backgroundColor="red" />
        <Box height={200} width={150} backgroundColor="orange" />
        <Box height={200} width={200} backgroundColor="yellow" />
      </div>
    );
  }
}

export default BoxList;
