// src/components/JobSearch.js
import React, { useState } from 'react';
import { TextField, Container, Typography } from '@mui/material';

const JobSearch = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  return (
    <Container sx={{ py: 4, bgcolor: 'background.paper', boxShadow: 1, borderRadius: 4 }}>
      <Typography variant="h4" gutterBottom>
        Search Jobs
      </Typography>
      <TextField
        label="Search by title or company"
        value={searchTerm}
        onChange={handleChange}
        fullWidth
        margin="normal"
        sx={{ mb: 2 }}
      />
    </Container>
  );
};

export default JobSearch;
