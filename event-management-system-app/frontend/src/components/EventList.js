import React, { useContext, useEffect } from 'react';
import { List, ListItem, ListItemText, Typography, Button, Grid, Paper } from '@mui/material';
import { styled } from '@mui/system';
import { EventProvider, useEvent } from '../context/EventContext';
import { Link } from 'react-router-dom';

const StyledPaper = styled(Paper)({
  padding: '16px',
  marginBottom: '16px',
});

const EventList = () => {
  const { events, getEvents } = useEvent();

  useEffect(() => {
    getEvents();
  }, []);

  return (
    <Grid container justifyContent="center">
      <Grid item xs={12} md={8}>
        <StyledPaper>
          <Typography variant="h4" gutterBottom>
            Event List
          </Typography>
          <List>
            {events.map(event => (
              <ListItem key={event.id}>
                <ListItemText
                  primary={event.name}
                  secondary={event.date}
                />
                <Button component={Link} to={`/events/${event.id}`} variant="contained" color="primary">
                  View
                </Button>
              </ListItem>
            ))}
          </List>
        </StyledPaper>
      </Grid>
    </Grid>
  );
};

export default EventList;
