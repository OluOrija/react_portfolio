import React, { useState } from 'react';
import Layout from '../components/Layout';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';
import TaskDetail from '../components/TaskDetail';
import { Route, Routes } from 'react-router-dom';

const TaskPage = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const toggleComplete = (index) => {
    const newTasks = tasks.map((task, i) => i === index ? { ...task, completed: !task.completed } : task);
    setTasks(newTasks);
  };

  const removeTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <Layout>
      <Routes>
        <Route path="/" element={
          <>
            <TaskForm addTask={addTask} />
            <TaskList tasks={tasks} toggleComplete={toggleComplete} removeTask={removeTask} />
          </>
        } />
        <Route path=":taskId" element={<TaskDetail tasks={tasks} />} />
      </Routes>
    </Layout>
  );
};

export default TaskPage;
