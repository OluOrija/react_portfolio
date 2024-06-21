import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Box, Button, Paper, Typography } from '@mui/material';

const Score = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { score, total } = location.state;

  return (
    <Box mt={4} component={Paper} p={3} textAlign="center">
      <Typography variant="h5" gutterBottom>Quiz Completed</Typography>
      <Typography variant="h6">Your Score: {score} / {total}</Typography>
      <Button variant="contained" color="primary" onClick={() => navigate.push('/')}>Back to Home</Button>
    </Box>
  );
};

export default Score;
