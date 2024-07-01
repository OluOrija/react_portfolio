import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

const TaskForm = ({ addTask }) => {
  const [task, setTask] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task && description) {
      addTask({ task, description, completed: false });
      setTask('');
      setDescription('');
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <TextField label="Task" variant="outlined" value={task} onChange={(e) => setTask(e.target.value)} />
      <TextField label="Description" variant="outlined" value={description} onChange={(e) => setDescription(e.target.value)} />
      <Button type="submit" variant="contained">Add Task</Button>
    </Box>
  );
};

export default TaskForm;
