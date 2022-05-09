import React from "react";
import useInputState from "./hooks/useInputState";
import TextField from "@mui/material/TextField";

function EditTodoForm(props) {
  const { id, task, editTodo, toggleIsEditing } = props;
  const [value, handleChange, reset] = useInputState(task);

  const handleSubmit = (ev) => {
    ev.preventDefault();
    editTodo(id, value);
    reset();
    toggleIsEditing();
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginLeft: "1rem", width: "50%" }}>
      <TextField
        value={value}
        onChange={handleChange}
        variant="standard"
        margin="normal"
        fullWidth
        autoFocus
      />
    </form>
  );
}

export default EditTodoForm;
