import React, { useState } from 'react';
import { getAttractions } from '../api/attractionsAPI';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import '../styles/Attractions.css';

const FindAttractions = () => {
  const [location, setLocation] = useState('');
  const [attractions, setAttractions] = useState([]);

  const searchAttractions = async () => {
    const data = await getAttractions(location);
    setAttractions(data);
  };

  return (
    <Container className="attractions-container">
      <Typography variant="h4" gutterBottom>
        Find Attractions
      </Typography>
      <div className="attractions-search">
        <TextField
          label="Enter location"
          variant="outlined"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          fullWidth
        />
        <Button variant="contained" color="primary" onClick={searchAttractions}>
          Search
        </Button>
      </div>
      <List className="attractions-list">
        {attractions.map((attr) => (
          <ListItem className="attractions-list-item" key={attr.id}>
            <Typography variant="h6">{attr.name}</Typography>
            <Button variant="contained" color="secondary">
              Details
            </Button>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default FindAttractions;
