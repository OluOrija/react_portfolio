// src/pages/TaskDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';
import Task from '../components/Task';

const TaskDetails = ({ tasks }) => {
  const { taskId } = useParams();
  const task = tasks.find(t => t.id === parseInt(taskId));

  return (
    <div>
      {task ? <Task task={task} /> : <p>Task not found</p>}
    </div>
  );
};

export default TaskDetails;
