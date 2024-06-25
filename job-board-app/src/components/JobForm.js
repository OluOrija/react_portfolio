// src/components/JobForm.js
import React, { useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';

const JobForm = ({ onAddJob }) => {
  const [job, setJob] = useState({ title: '', company: '', description: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJob((prevJob) => ({ ...prevJob, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddJob(job);
    setJob({ title: '', company: '', description: '' });
  };

  return (
    <Container sx={{ py: 4, bgcolor: 'background.paper', boxShadow: 1, borderRadius: 4 }}>
      <Typography variant="h4" gutterBottom>
        Post a Job
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Job Title"
          name="title"
          value={job.title}
          onChange={handleChange}
          fullWidth
          margin="normal"
          sx={{ mb: 2 }}
        />
        <TextField
          label="Company"
          name="company"
          value={job.company}
          onChange={handleChange}
          fullWidth
          margin="normal"
          sx={{ mb: 2 }}
        />
        <TextField
          label="Job Description"
          name="description"
          value={job.description}
          onChange={handleChange}
          fullWidth
          margin="normal"
          multiline
          rows={4}
          sx={{ mb: 2 }}
        />
        <Button type="submit" variant="contained" color="primary" sx={{ mb: 2 }}>
          Post Job
        </Button>
      </form>
    </Container>
  );
};

export default JobForm;
