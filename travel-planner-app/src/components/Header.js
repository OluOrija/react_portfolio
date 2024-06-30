import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import '../styles/Header.css';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Travel Planner
        </Typography>
        <Button color="inherit" component={Link} to="/">Home</Button>
        <Button color="inherit" component={Link} to="/book-accommodation">Book Accommodation</Button>
        <Button color="inherit" component={Link} to="/find-attractions">Find Attractions</Button>
        <Button color="inherit" component={Link} to="/create-itinerary">Create Itinerary</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
