// src/components/EventList.js
import React from 'react';
import { List, ListItem, ListItemText, Button, CircularProgress } from '@material-ui/core';
import { useEvent } from '../context/EventContext';

const EventList = () => {
  const { events, loading, deleteEvent } = useEvent();

  if (loading) {
    return <CircularProgress />;
  }

  return (
    <List>
      {events.map((event) => (
        <ListItem key={event._id}>
          <ListItemText primary={event.title} secondary={event.date} />
          <Button variant="outlined" color="secondary" onClick={() => deleteEvent(event._id)}>
            Delete
          </Button>
        </ListItem>
      ))}
    </List>
  );
};

export default EventList;
