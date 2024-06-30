import React, { useState } from 'react';
import { getAccommodations } from '../api/accommodationAPI';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import '../styles/Accommodation.css';

const BookAccommodation = () => {
  const [location, setLocation] = useState('');
  const [accommodations, setAccommodations] = useState([]);

  const searchAccommodations = async () => {
    const data = await getAccommodations(location);
    setAccommodations(data);
  };

  return (
    <Container className="accommodation-container">
      <Typography variant="h4" gutterBottom>
        Book Accommodation
      </Typography>
      <div className="accommodation-search">
        <TextField
          label="Enter location"
          variant="outlined"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          fullWidth
        />
        <Button variant="contained" color="primary" onClick={searchAccommodations}>
          Search
        </Button>
      </div>
      <List className="accommodation-list">
        {accommodations.map((acc) => (
          <ListItem className="accommodation-list-item" key={acc.id}>
            <Typography variant="h6">{acc.name}</Typography>
            <Button variant="contained" color="secondary">
              Book
            </Button>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default BookAccommodation;
