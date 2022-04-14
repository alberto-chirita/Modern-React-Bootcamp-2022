import React, { Component } from "react";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";
import "./TodoList.css";

export class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = { todos: [] };
  }

  removeTodo = (id) => {
    const filteredTodos = this.state.todos.filter((todo) => todo.id !== id);
    this.setState({ todos: filteredTodos });
  };

  createTodo = (newTodo) => {
    this.setState({ todos: [...this.state.todos, newTodo] });
  };

  updateTodo = (id, updatedTask) => {
    const updatedTodos = this.state.todos.map((todo) =>
      todo.id === id ? { ...todo, task: updatedTask } : todo
    );
    this.setState({ todos: updatedTodos });
  };

  toggleCompletion = (id) => {
    const updatedTodos = this.state.todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    this.setState({ todos: updatedTodos });
  };

  renderTodos() {
    return this.state.todos.map((todo) => (
      <Todo
        key={todo.id}
        id={todo.id}
        task={todo.task}
        completed={todo.completed}
        toggleCompletion={this.toggleCompletion}
        updateTodo={this.updateTodo}
        removeTodo={this.removeTodo}
      />
    ));
  }

  render() {
    return (
      <div className="TodoList">
        <h1>Todo List!</h1>
        <span>A Simple React Todo List App</span>
        <ul>{this.renderTodos()}</ul>
        <NewTodoForm createTodo={this.createTodo} />
      </div>
    );
  }
}

export default TodoList;
