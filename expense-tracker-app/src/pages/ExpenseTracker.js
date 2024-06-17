// src/pages/ExpenseTracker.js
import React, { useState, useEffect } from 'react';
import { Container, Typography, Paper, TextField, Button, List, ListItem, ListItemText, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ExpensesChart from '../components/ExpensesChart';

function ExpenseTracker() {
  const [expenses, setExpenses] = useState([]);
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  useEffect(() => {
    const storedExpenses = JSON.parse(localStorage.getItem('expenses'));
    if (storedExpenses) {
      setExpenses(storedExpenses);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses]);

  const handleAddExpense = () => {
    if (!description || !amount) {
      alert('Please fill out both fields.');
      return;
    }
    setExpenses([...expenses, { description, amount: parseFloat(amount) }]);
    setDescription('');
    setAmount('');
  };

  const handleDeleteExpense = (index) => {
    const newExpenses = expenses.filter((_, i) => i !== index);
    setExpenses(newExpenses);
  };

  const total = expenses.reduce((acc, expense) => acc + expense.amount, 0);

  const styles = {
    paper: {
      padding: 16,
      marginTop: 16,
    },
    button: {
      marginTop: 16,
    },
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Expense Tracker
      </Typography>
      <Paper style={styles.paper}>
        <TextField
          fullWidth
          label="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Amount"
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          margin="normal"
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleAddExpense}
          style={styles.button}
        >
          Add Expense
        </Button>
        <Typography variant="h6" gutterBottom style={{ marginTop: 16 }}>
          Total: ${total.toFixed(2)}
        </Typography>
        <ExpensesChart expenses={expenses} />
        <List>
          {expenses.map((expense, index) => (
            <ListItem
              key={index}
              secondaryAction={
                <IconButton edge="end" aria-label="delete" onClick={() => handleDeleteExpense(index)}>
                  <DeleteIcon />
                </IconButton>
              }
            >
              <ListItemText primary={expense.description} secondary={`$${expense.amount.toFixed(2)}`} />
            </ListItem>
          ))}
        </List>
      </Paper>
    </Container>
  );
}

export default ExpenseTracker;
