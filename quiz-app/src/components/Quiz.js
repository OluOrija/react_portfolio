import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, Button, Paper, Typography, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from '@mui/material';
import { useSelector } from 'react-redux'

const Quiz = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const quizzes = useSelector((state) => state.quiz.quizzes);
  const quiz = quizzes[id];
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [score, setScore] = useState(0);

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleNextQuestion = () => {
    if (selectedOption === quiz.questions[currentQuestion].correct) {
      setScore(score + 1);
    }
    setSelectedOption('');
    setCurrentQuestion(currentQuestion + 1);
  };

  const handleFinishQuiz = () => {
    if (selectedOption === quiz.questions[currentQuestion].correct) {
      setScore(score + 1);
    }
    navigate.push(`/score/${id}`, { score, total: quiz.questions.length });
  };

  return (
    <Box mt={4} component={Paper} p={3}>
      <Typography variant="h5" gutterBottom>{quiz.title}</Typography>
      {currentQuestion < quiz.questions.length ? (
        <Box>
          <Typography variant="h6">{quiz.questions[currentQuestion].text}</Typography>
          <FormControl component="fieldset">
            <FormLabel component="legend">Options</FormLabel>
            <RadioGroup value={selectedOption} onChange={handleOptionChange}>
              {quiz.questions[currentQuestion].options.map((option, index) => (
                <FormControlLabel key={index} value={option} control={<Radio />} label={option} />
              ))}
            </RadioGroup>
          </FormControl>
          <Box mt={2} display="flex" justifyContent="space-between">
            <Button variant="contained" color="primary" onClick={handleNextQuestion} disabled={!selectedOption}>
              {currentQuestion < quiz.questions.length - 1 ? "Next" : "Finish"}
            </Button>
          </Box>
        </Box>
      ) : (
        <Typography variant="h6">Quiz Completed</Typography>
      )}
    </Box>
  );
};

export default Quiz;
