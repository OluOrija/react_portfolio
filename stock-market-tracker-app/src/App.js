import React from 'react';
import { Container, Typography } from '@mui/material';
import StockList from './components/StockList';

function App() {
  return (
    <Container>
      <Typography variant="h3" gutterBottom>
        Stock Market Tracker
      </Typography>
      <StockList />
    </Container>
  );
}

export default App;
