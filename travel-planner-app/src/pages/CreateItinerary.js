import React, { useState } from 'react';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import '../styles/Itinerary.css';

const CreateItinerary = () => {
  const [itinerary, setItinerary] = useState([]);
  const [newItem, setNewItem] = useState('');

  const addItem = () => {
    setItinerary([...itinerary, newItem]);
    setNewItem('');
  };

  return (
    <Container className="itinerary-container">
      <Typography variant="h4" gutterBottom>
        Create Itinerary
      </Typography>
      <div className="itinerary-input">
        <TextField
          label="Add an item"
          variant="outlined"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          fullWidth
        />
        <Button variant="contained" color="primary" onClick={addItem}>
          Add
        </Button>
      </div>
      <List className="itinerary-list">
        {itinerary.map((item, index) => (
          <ListItem className="itinerary-list-item" key={index}>
            <Typography variant="h6">{item}</Typography>
            <Button variant="contained" color="secondary">
              Remove
            </Button>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default CreateItinerary;
