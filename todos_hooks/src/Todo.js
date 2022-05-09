import React from "react";
import useToggleState from "./hooks/useToggleState";
import EditTodoForm from "./EditTodoForm";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import ListItemSecondaryAction from "@mui/material/ListItemSecondaryAction";

function Todo(props) {
  const { id, task, completed, toggleTodo, editTodo, removeTodo } = props;

  const [isEditing, toggleIsEditing] = useToggleState(false);

  const handleCheckbox = () => {
    toggleTodo(id);
  };

  const handleEdit = () => {
    toggleIsEditing();
  };

  const handleDelete = () => {
    removeTodo(id);
  };

  return (
    <ListItem style={{ height: "64px" }}>
      {isEditing ? (
        <EditTodoForm
          id={id}
          task={task}
          editTodo={editTodo}
          toggleIsEditing={toggleIsEditing}
        />
      ) : (
        <>
          <Checkbox
            checked={completed}
            tabIndex={-1}
            onClick={handleCheckbox}
          />
          <ListItemText
            style={{ textDecoration: completed ? "line-through" : "none" }}
          >
            {task}
          </ListItemText>
          <ListItemSecondaryAction>
            <IconButton aria-label="Edit" onClick={handleEdit}>
              <EditIcon />
            </IconButton>
            <IconButton aria-label="Delete" onClick={handleDelete}>
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </>
      )}
    </ListItem>
  );
}

export default Todo;
