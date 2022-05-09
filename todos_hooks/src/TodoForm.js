import React from "react";
import useInputState from "./hooks/useInputState";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";

function TodoForm(props) {
  const { addTodo } = props;
  const [value, handleChange, reset] = useInputState("");

  const handleSubmit = (ev) => {
    ev.preventDefault();
    addTodo(value);
    reset();
  };

  return (
    <Paper style={{ margin: "1rem 0", padding: "0 1rem" }}>
      <form onSubmit={handleSubmit}>
        <TextField
          value={value}
          onChange={handleChange}
          variant="standard"
          margin="normal"
          label="Add New Todo"
          fullWidth
        />
      </form>
    </Paper>
  );
}

export default TodoForm;
