// src/components/EventDialog.js
import React, { useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, TextField, Button } from '@mui/material';

const EventDialog = ({ open, handleClose, handleSave }) => {
  const [title, setTitle] = useState('');
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');

  const onSave = () => {
    handleSave({ title, start: new Date(start), end: new Date(end) });
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Add Event</DialogTitle>
      <DialogContent>
        <TextField
          margin="dense"
          label="Title"
          fullWidth
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          margin="dense"
          label="Start"
          type="datetime-local"
          fullWidth
          value={start}
          onChange={(e) => setStart(e.target.value)}
          InputLabelProps={{ shrink: true }}
        />
        <TextField
          margin="dense"
          label="End"
          type="datetime-local"
          fullWidth
          value={end}
          onChange={(e) => setEnd(e.target.value)}
          InputLabelProps={{ shrink: true }}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">Cancel</Button>
        <Button onClick={onSave} color="primary">Save</Button>
      </DialogActions>
    </Dialog>
  );
};

export default EventDialog;
