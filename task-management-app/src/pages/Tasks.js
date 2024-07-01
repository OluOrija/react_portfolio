// src/pages/Tasks.js
import React, { useState } from 'react';
import TaskList from '../components/TaskList';
import NewTask from '../components/NewTask';

const Tasks = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Sample Task 1', description: 'This is a sample task description' },
    { id: 2, title: 'Sample Task 2', description: 'This is another sample task description' }
  ]);

  const addTask = (task) => {
    setTasks([...tasks, { ...task, id: tasks.length + 1 }]);
  };

  return (
    <div>
      <NewTask addTask={addTask} />
      <TaskList tasks={tasks} />
    </div>
  );
};

export default Tasks;
