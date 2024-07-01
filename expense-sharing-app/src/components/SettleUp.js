// src/components/SettleUp.js
import React, { useState, useEffect } from 'react';
import { Container, Typography, Button, List, ListItem, ListItemText, TextField } from '@mui/material';
import { collection, query, getDocs, addDoc, where } from 'firebase/firestore';
import { db } from '../firebase/config';
import { auth } from '../firebase/config';

const SettleUp = () => {
  const [expenses, setExpenses] = useState([]);
  const [settlements, setSettlements] = useState([]);
  const [totalBalance, setTotalBalance] = useState(0);
  const [amount, setAmount] = useState('');
  const user = auth.currentUser;

  useEffect(() => {
    const fetchExpensesAndSettlements = async () => {
      if (!user) return;

      const expensesQuery = query(collection(db, 'expenses'), where('userId', '==', user.uid));
      const settlementsQuery = query(collection(db, 'settlements'), where('userId', '==', user.uid));

      const expensesSnapshot = await getDocs(expensesQuery);
      const settlementsSnapshot = await getDocs(settlementsQuery);

      const expensesData = expensesSnapshot.docs.map(doc => doc.data());
      const settlementsData = settlementsSnapshot.docs.map(doc => doc.data());

      setExpenses(expensesData);
      setSettlements(settlementsData);

      const totalExpenses = expensesData.reduce((acc, expense) => acc + expense.amount, 0);
      const totalSettlements = settlementsData.reduce((acc, settlement) => acc + settlement.amount, 0);

      setTotalBalance(totalExpenses - totalSettlements);
    };

    fetchExpensesAndSettlements();
  }, [user]);

  const handleSettleUp = async () => {
    if (!amount || parseFloat(amount) <= 0) {
      alert('Please enter a valid amount');
      return;
    }

    try {
      await addDoc(collection(db, 'settlements'), {
        userId: user.uid,
        amount: parseFloat(amount),
        timestamp: new Date(),
      });

      setAmount('');
      setTotalBalance(totalBalance - parseFloat(amount));
      alert('Settlement recorded successfully');
    } catch (error) {
      console.error("Error settling up: ", error);
    }
  };

  return (
    <Container>
      <Typography variant="h4">Settle Up</Typography>
      <Typography variant="h6">Total Balance: ${totalBalance.toFixed(2)}</Typography>
      <List>
        {expenses.map((expense, index) => (
          <ListItem key={index}>
            <ListItemText primary={expense.description} secondary={`$${expense.amount}`} />
          </ListItem>
        ))}
        {settlements.map((settlement, index) => (
          <ListItem key={index}>
            <ListItemText primary={`Settlement`} secondary={`$${settlement.amount}`} />
          </ListItem>
        ))}
      </List>
      <TextField
        label="Amount"
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Button onClick={handleSettleUp} variant="contained" color="primary">
        Settle Up
      </Button>
    </Container>
  );
};

export default SettleUp;
