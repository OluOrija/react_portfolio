import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const Home = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Welcome to the Travel Planner
      </Typography>
      <Typography variant="body1">
        Plan your perfect trip with ease!
      </Typography>
    </Container>
  );
};

export default Home;
