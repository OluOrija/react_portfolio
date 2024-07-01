// src/components/Task.js
import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const Task = ({ task }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5">{task.title}</Typography>
        <Typography variant="body1">{task.description}</Typography>
      </CardContent>
    </Card>
  );
};

export default Task;
