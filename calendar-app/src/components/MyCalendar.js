// src/components/MyCalendar.js
import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Box, Button, Typography, Grid, useTheme } from '@mui/material';
import EventDialog from './EventDialog';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const localizer = momentLocalizer(moment);

const MyCalendar = () => {
  const [events, setEvents] = useState([]);
  const [dialogOpen, setDialogOpen] = useState(false);
  const theme = useTheme();

  const handleSave = (event) => {
    setEvents([...events, event]);
  };

  useEffect(() => {
    const now = new Date();
    events.forEach(event => {
      const eventTime = new Date(event.start).getTime();
      if (eventTime - now.getTime() < 0 && eventTime - now.getTime() > -1000) {
        toast(`Reminder: ${event.title} is happening now!`);
      }
    });
  }, [events]);

  return (
    <Box sx={{ padding: '20px', backgroundColor: theme.palette.background.default }}>
      <Typography variant="h4" component="h1">
        Calendar App
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => setDialogOpen(true)}
            sx={{ marginBottom: '20px' }}
          >
            Add Event
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 500, backgroundColor: '#fff', borderRadius: '8px' }}
          />
        </Grid>
      </Grid>
      <EventDialog
        open={dialogOpen}
        handleClose={() => setDialogOpen(false)}
        handleSave={handleSave}
      />
      <ToastContainer />
    </Box>
  );
};

export default MyCalendar;
