// TodoForm.js

import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
  // Initialize state for input text
  const [text, setText] = useState('');

  // Function to handle input text change
  const handleChange = (event) => {
    setText(event.target.value);
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!text.trim()) return; // Prevent adding empty todos
    addTodo(text);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Enter todo..." 
        value={text} 
        onChange={handleChange} 
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default TodoForm;
