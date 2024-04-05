import logo from './logo.svg';
import React from 'react';
import TodoList from './components/TodoList';
import './components/Todo.css'; // Import your CSS file if you have one
import './App.css';

function App() {
  return (
    <div className="App">
      <TodoList/>
    </div>
  );
}

export default App;
