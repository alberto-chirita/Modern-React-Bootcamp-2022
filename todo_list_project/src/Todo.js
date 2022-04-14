import React, { Component } from "react";
import "./Todo.css";

export class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = { task: this.props.task, isEditing: false };
  }

  handleUpdate = (evt) => {
    evt.preventDefault();
    this.props.updateTodo(this.props.id, this.state.task);
    this.toggleFrom();
  };

  handleChange = (evt) => {
    this.setState({ [evt.target.name]: evt.target.value });
  };

  handleToggle = () => {
    this.props.toggleCompletion(this.props.id);
  };

  toggleFrom = () => {
    this.setState({ isEditing: !this.state.isEditing });
  };

  handleRemove = () => {
    this.props.removeTodo(this.props.id);
  };

  render() {
    let result;

    if (this.state.isEditing) {
      result = (
        <div className="Todo">
          <form className="Todo-edit-form" onSubmit={this.handleUpdate}>
            <input
              type="text"
              name="task"
              id="task"
              value={this.state.task}
              onChange={this.handleChange}
              placeholder="Todo"
            />{" "}
            <button>Save</button>
          </form>
        </div>
      );
    } else {
      result = (
        <div className="Todo">
          <li
            className={
              this.props.completed ? "Todo-task completed" : "Todo-task"
            }
            onClick={this.handleToggle}
          >
            {this.state.task}{" "}
          </li>
          <div className="Todo-buttons">
            <button onClick={this.toggleFrom}>
              <i className="fas fa-pen" />
            </button>{" "}
            <button onClick={this.handleRemove}>
              <i className="fas fa-trash" />
            </button>
          </div>
        </div>
      );
    }

    return result;
  }
}

export default Todo;
