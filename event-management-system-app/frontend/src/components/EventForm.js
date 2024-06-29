import React, { useState, useContext } from 'react';
import { TextField, Button, Grid, Paper, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { EventProvider, useEvent } from '../context/EventContext';
import { useNavigate } from 'react-router-dom';

const StyledPaper = styled(Paper)({
  padding: '16px',
  marginBottom: '16px',
});

const EventForm = () => {
  const { addEvent } = useEvent();
  const navigate = useNavigate();
  const [event, setEvent] = useState({ name: '', date: '' });

  const handleChange = (e) => {
    setEvent({ ...event, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addEvent(event);
    navigate.push('/');
  };

  return (
    <Grid container justifyContent="center">
      <Grid item xs={12} md={8}>
        <StyledPaper>
          <Typography variant="h4" gutterBottom>
            Add New Event
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Event Name"
              name="name"
              value={event.name}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Event Date"
              name="date"
              value={event.date}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <Button type="submit" variant="contained" color="primary">
              Add Event
            </Button>
          </form>
        </StyledPaper>
      </Grid>
    </Grid>
  );
};

export default EventForm;
