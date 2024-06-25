// src/components/JobList.js
import React from 'react';
import { List, ListItem, ListItemText, Container, Typography } from '@mui/material';

const JobList = ({ jobs }) => (
  <Container sx={{ py: 4, bgcolor: 'background.paper', boxShadow: 1, borderRadius: 4 }}>
    <Typography variant="h4" gutterBottom>
      Job Listings
    </Typography>
    <List>
      {jobs.map((job, index) => (
        <ListItem key={index} divider sx={{ py: 2 }}>
          <ListItemText
            primary={`${job.title} at ${job.company}`}
            secondary={job.description}
          />
        </ListItem>
      ))}
    </List>
  </Container>
);

export default JobList;
