import React, { Component } from "react";
import NewBoxForm from "./NewBoxForm";
import Box from "./Box";
import { v4 as uuidv4 } from "uuid";

export class BoxList extends Component {
  constructor(props) {
    super(props);
    this.state = { boxes: [] };
  }

  removeBox = (id) => {
    const filteredBoxes = this.state.boxes.filter((box) => box.id !== id);

    this.setState({
      boxes: filteredBoxes,
    });
  };

  addNewBox = (box) => {
    const newBox = { id: uuidv4(), ...box };
    this.setState((state) => ({
      boxes: [...state.boxes, newBox],
    }));
  };

  renderBoxes() {
    return (
      <div>
        {this.state.boxes.map((box) => (
          <Box
            key={box.id}
            id={box.id}
            height={box.height}
            width={box.width}
            backgroundColor={box.backgroundColor}
            removeBox={this.removeBox}
          />
        ))}
      </div>
    );
  }

  render() {
    return (
      <div>
        <h1>Color Box Maker</h1>
        <NewBoxForm addNewBox={this.addNewBox} />
        {this.renderBoxes()}
      </div>
    );
  }
}

export default BoxList;
