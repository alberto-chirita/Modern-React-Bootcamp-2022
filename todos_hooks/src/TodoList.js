import React, { Fragment } from "react";
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import Todo from "./Todo";

function TodoList(props) {
  const { todos, toggleTodo, editTodo, removeTodo } = props;

  return todos.length ? (
    <Paper>
      <List>
        {todos.map((todo, index) => (
          <Fragment key={todo.id}>
            <Todo
              {...todo}
              toggleTodo={toggleTodo}
              editTodo={editTodo}
              removeTodo={removeTodo}
            />
            {todos.length - 1 > index && <Divider />}
          </Fragment>
        ))}
      </List>
    </Paper>
  ) : null;
}

export default TodoList;
