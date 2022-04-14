import React, { Component } from "react";

export class NewBoxForm extends Component {
  constructor(props) {
    super(props);
    this.state = { height: "", width: "", backgroundColor: "" };
  }

  handleSubmit = (evt) => {
    evt.preventDefault();
    this.props.addNewBox(this.state);
    this.setState({ height: "", width: "", backgroundColor: "" });
  };

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="height">Height (em): </label>
          <input
            type="text"
            name="height"
            id="height"
            value={this.state.height}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor="width">Width (em): </label>
          <input
            type="text"
            name="width"
            id="width"
            value={this.state.width}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor="backgroundColor">Background-Color: </label>
          <input
            type="text"
            name="backgroundColor"
            id="backgroundColor"
            value={this.state.backgroundColor}
            onChange={this.handleChange}
          />
        </div>
        <button>Add a New Box!</button>
      </form>
    );
  }
}

export default NewBoxForm;
