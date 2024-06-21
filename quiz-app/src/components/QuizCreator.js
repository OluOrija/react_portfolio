import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addQuiz } from '../store/quizSlice';
import { Button, TextField, Typography, Box, Paper, Select, MenuItem, InputLabel, FormControl, IconButton } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const QuizCreator = () => {
  const [quiz, setQuiz] = useState({ title: '', category: '', questions: [] });
  const [question, setQuestion] = useState({ text: '', options: ['', '', '', ''], correct: '' });
  const dispatch = useDispatch();

  const handleQuizChange = (e) => {
    setQuiz({ ...quiz, [e.target.name]: e.target.value });
  };

  const handleQuestionChange = (e) => {
    setQuestion({ ...question, text: e.target.value });
  };

  const handleOptionChange = (index, e) => {
    const newOptions = question.options.slice();
    newOptions[index] = e.target.value;
    setQuestion({ ...question, options: newOptions });
  };

  const handleCorrectChange = (e) => {
    setQuestion({ ...question, correct: e.target.value });
  };

  const addQuestion = () => {
    setQuiz({ ...quiz, questions: [...quiz.questions, question] });
    setQuestion({ text: '', options: ['', '', '', ''], correct: '' });
  };

  const saveQuiz = () => {
    dispatch(addQuiz(quiz));
    setQuiz({ title: '', category: '', questions: [] });
  };

  return (
    <Box mt={4} component={Paper} p={3}>
      <Typography variant="h5" gutterBottom>Create a New Quiz</Typography>
      <TextField
        label="Quiz Title"
        name="title"
        fullWidth
        margin="normal"
        value={quiz.title}
        onChange={handleQuizChange}
      />
      <FormControl fullWidth margin="normal">
        <InputLabel>Category</InputLabel>
        <Select
          name="category"
          value={quiz.category}
          onChange={handleQuizChange}
        >
          <MenuItem value="Math">Math</MenuItem>
          <MenuItem value="Science">Science</MenuItem>
          <MenuItem value="History">History</MenuItem>
          <MenuItem value="Literature">Literature</MenuItem>
        </Select>
      </FormControl>
      <Typography variant="h6" gutterBottom>Add Question</Typography>
      <TextField
        label="Question Text"
        fullWidth
        margin="normal"
        value={question.text}
        onChange={handleQuestionChange}
      />
      {question.options.map((option, index) => (
        <TextField
          key={index}
          label={`Option ${index + 1}`}
          fullWidth
          margin="normal"
          value={option}
          onChange={(e) => handleOptionChange(index, e)}
        />
      ))}
      <TextField
        label="Correct Option"
        fullWidth
        margin="normal"
        value={question.correct}
        onChange={handleCorrectChange}
      />
      <Box display="flex" justifyContent="space-between" mt={2}>
        <IconButton color="primary" onClick={addQuestion}>
          <AddCircleOutlineIcon />
        </IconButton>
        <Button variant="contained" color="secondary" onClick={saveQuiz}>Save Quiz</Button>
      </Box>
    </Box>
  );
};

export default QuizCreator;
