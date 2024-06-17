// TodoItem.js

import React from 'react';

const TodoItem = ({ todo, toggleTodo, deleteTodo }) => {
  // Function to handle toggling the completion status of a todo
  const handleToggle = () => {
    toggleTodo(todo.id);
  };

  // Function to handle deleting a todo
  const handleDelete = () => {
    deleteTodo(todo.id);
  };

  return (
    <li className={todo.completed ? "completed" : ""}>
      <input 
        type="checkbox" 
        checked={todo.completed} 
        onChange={handleToggle} 
      />
      <span>{todo.text}</span>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
};

export default TodoItem;
