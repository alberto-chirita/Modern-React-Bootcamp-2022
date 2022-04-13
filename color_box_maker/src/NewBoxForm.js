import React, { Component } from "react";

export class NewBoxForm extends Component {
  handleSubmit = (evt) => {
    evt.preventDefault();
    alert("New Box");
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="height">Height: </label>
          <input type="text" name="height" id="height" />
        </div>
        <div>
          <label htmlFor="width">Width: </label>
          <input type="text" name="width" id="width" />
        </div>
        <div>
          <label htmlFor="backgroundColor">Background Color: </label>
          <input type="text" name="backgroundColor" id="backgroundColor" />
        </div>
        <button>Add a new box!</button>
      </form>
    );
  }
}

export default NewBoxForm;
