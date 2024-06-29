// src/components/RsvpButton.js
import React from 'react';
import { Button } from '@mui/material';
import { useRsvp } from '../context/RsvpContext';

const RsvpButton = ({ eventId }) => {
  const { addRsvp } = useRsvp();

  const handleRsvp = async () => {
    const newRsvp = { eventId, userId: 'currentUserId', status: 'RSVPed' }; // Simulated data
    await addRsvp(newRsvp);
  };

  return (
    <Button variant="contained" color="primary" onClick={handleRsvp}>
      RSVP
    </Button>
  );
};

export default RsvpButton;
