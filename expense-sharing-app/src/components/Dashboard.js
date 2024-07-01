// src/components/Dashboard.js
import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Typography variant="h4">Dashboard</Typography>
      <Button onClick={() => navigate('/add-expense')} variant="contained" color="primary">
        Add Expense
      </Button>
      <Button onClick={() => navigate('/settle-up')} variant="contained" color="secondary">
        Settle Up
      </Button>
    </Container>
  );
};

export default Dashboard;
