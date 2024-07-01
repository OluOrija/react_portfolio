// src/components/AddExpense.js
import React, { useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase/config';
import { useNavigate } from 'react-router-dom';

const AddExpense = () => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const navigate = useNavigate();

  const handleAddExpense = async () => {
    if (!description || !amount) {
      alert('Please fill in all fields');
      return;
    }

    try {
      await addDoc(collection(db, 'expenses'), {
        description,
        amount: parseFloat(amount),
        timestamp: new Date(),
      });

      // Clear the form fields
      setDescription('');
      setAmount('');

      // Redirect to the dashboard
      navigate('/dashboard');
    } catch (error) {
      console.error("Error adding expense: ", error);
    }
  };

  return (
    <Container>
      <Typography variant="h4">Add Expense</Typography>
      <TextField
        label="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Amount"
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Button onClick={handleAddExpense} variant="contained" color="primary">
        Add
      </Button>
    </Container>
  );
};

export default AddExpense;
