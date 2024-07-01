import React from 'react';
import { useParams } from 'react-router-dom';
import { Typography } from '@mui/material';

const TaskDetail = ({ tasks }) => {
  const { taskId } = useParams();
  const task = tasks[taskId];

  if (!task) {
    return <Typography variant="h6">Task not found</Typography>;
  }

  return (
    <div>
      <Typography variant="h4">{task.task}</Typography>
      <Typography variant="body1">{task.description}</Typography>
      <Typography variant="body2">Completed: {task.completed ? 'Yes' : 'No'}</Typography>
    </div>
  );
};

export default TaskDetail;
