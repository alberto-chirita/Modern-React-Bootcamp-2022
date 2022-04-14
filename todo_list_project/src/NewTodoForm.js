import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import "./NewTodoForm.css";

export class NewTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = { task: "" };
  }

  handleSubmit = (evt) => {
    evt.preventDefault();
    this.props.createTodo({ id: uuidv4(), ...this.state, completed: false });
    this.setState({ task: "" });
  };

  handleChange = (evt) => {
    this.setState({ [evt.target.name]: evt.target.value });
  };

  render() {
    return (
      <form className="NewTodoForm" onSubmit={this.handleSubmit}>
        <label htmlFor="task">New Todo</label>
        <input
          type="text"
          name="task"
          id="task"
          value={this.state.task}
          onChange={this.handleChange}
          placeholder="Todo"
        />{" "}
        <button>Add Todo</button>
      </form>
    );
  }
}

export default NewTodoForm;
