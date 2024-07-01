// src/components/TaskList.js
import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';

const TaskList = ({ tasks }) => {
  return (
    <List>
      {tasks.map(task => (
        <ListItem button component={Link} to={`/tasks/${task.id}`} key={task.id}>
          <ListItemText primary={task.title} />
        </ListItem>
      ))}
    </List>
  );
};

export default TaskList;
