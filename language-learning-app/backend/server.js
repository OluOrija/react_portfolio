const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Define your routes here
app.get('/', (req, res) => {
  res.send('Welcome to the Language Learning App backend!');
});

// Example routes for flashcards, quiz, and pronunciation
app.get('/flashcards', (req, res) => {
  res.json([
    { id: 1, front: 'Hello', back: 'Hola' },
    { id: 2, front: 'Goodbye', back: 'Adiós' },
    // Add more flashcards here
  ]);
});

app.get('/quiz', (req, res) => {
  res.json([
    { id: 1, question: 'What is "apple" in Spanish?', options: ['Manzana', 'Pera', 'Naranja'], answer: 'Manzana' },
    // Add more quiz questions here
  ]);
});

app.get('/pronunciation', (req, res) => {
  res.json([
    { id: 1, text: 'Hola' },
    { id: 2, text: 'Adiós' },
    // Add more pronunciation texts here
  ]);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
