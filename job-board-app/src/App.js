// src/App.js
import React, { useState } from 'react';
import JobForm from './components/JobForm';
import JobList from './components/JobList';
import JobSearch from './components/JobSearch';
import { Container, Typography } from '@mui/material';

const App = () => {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);

  const addJob = (job) => {
    setJobs((prevJobs) => [job, ...prevJobs]);
    setFilteredJobs((prevJobs) => [job, ...prevJobs]);
  };

  const searchJobs = (searchTerm) => {
    const lowercasedTerm = searchTerm.toLowerCase();
    const filtered = jobs.filter(
      (job) =>
        job.title.toLowerCase().includes(lowercasedTerm) ||
        job.company.toLowerCase().includes(lowercasedTerm)
    );
    setFilteredJobs(filtered);
  };

  return (
    <Container>
      <Typography variant="h3" gutterBottom>
        Job Board
      </Typography>
      <JobForm onAddJob={addJob} />
      <JobSearch onSearch={searchJobs} />
      <JobList jobs={filteredJobs} />
    </Container>
  );
};

export default App;
