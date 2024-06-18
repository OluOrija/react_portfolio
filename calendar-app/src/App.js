import React from 'react';
import { Container, Typography } from '@mui/material';
import Calendar from './components/Calendar';

function App() {
  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Calendar App
      </Typography>
      <Calendar />
    </Container>
  );
}

export default App;
