import React from "react";
import useTodoState from "./hooks/useTodoState";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";
import { v4 as uuid } from "uuid";

function TodoApp() {
  const initialTodos = [
    { id: uuid(), task: "Clean Fishtank", completed: false },
    { id: uuid(), task: "Wash Car", completed: true },
    { id: uuid(), task: "Grow Beard", completed: false },
  ];

  const { todos, toggleTodo, addTodo, editTodo, removeTodo } =
    useTodoState(initialTodos);

  return (
    <Paper
      style={{
        padding: 0,
        margin: 0,
        height: "100vh",
        backgroundColor: "#fafafa",
      }}
      elevation={0}
    >
      <AppBar color="primary" position="static" style={{ height: "64px" }}>
        <Toolbar>
          <Typography color="inherit">TODOS WITH HOOKS</Typography>
        </Toolbar>
      </AppBar>
      <Grid container justifyContent="center" style={{ marginTop: "1rem" }}>
        <Grid item xs={11} md={8} lg={4}>
          <TodoForm addTodo={addTodo} />
          <TodoList
            todos={todos}
            toggleTodo={toggleTodo}
            editTodo={editTodo}
            removeTodo={removeTodo}
          />
        </Grid>
      </Grid>
    </Paper>
  );
}

export default TodoApp;
