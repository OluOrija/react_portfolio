// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Tasks from './pages/Tasks';
import TaskDetails from './pages/TaskDetails';

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Sample Task 1', description: 'This is a sample task description' },
    { id: 2, title: 'Sample Task 2', description: 'This is another sample task description' }
  ]);

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/tasks/:taskId" element={<TaskDetails tasks={tasks} />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
