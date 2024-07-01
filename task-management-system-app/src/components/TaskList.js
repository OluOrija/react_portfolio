import React from 'react';
import { List, ListItem, ListItemText, IconButton, Checkbox } from '@mui/material';
import { Delete } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const TaskList = ({ tasks, toggleComplete, removeTask }) => {
  return (
    <List>
      {tasks.map((task, index) => (
        <ListItem key={index} secondaryAction={
          <>
            <Checkbox edge="end" onChange={() => toggleComplete(index)} checked={task.completed} />
            <IconButton edge="end" aria-label="delete" onClick={() => removeTask(index)}>
              <Delete />
            </IconButton>
          </>
        }>
          <ListItemText
            primary={<Link to={`/tasks/${index}`}>{task.task}</Link>}
            secondary={task.description}
            style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
          />
        </ListItem>
      ))}
    </List>
  );
};

export default TaskList;
