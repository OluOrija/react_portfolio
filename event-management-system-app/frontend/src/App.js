import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container, CssBaseline, Grid, Paper, ThemeProvider, createTheme } from '@mui/material';
import { AuthProvider } from './context/AuthContext';
import { EventProvider } from './context/EventContext';
import PrivateRoute from './components/PrivateRoute';
import Header from './components/Header';
import Login from './components/Login';
import EventList from './components/EventList';
import EventForm from './components/EventForm';
import MyCalendar from './components/Calendar';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

const styles = {
  root: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  main: {
    marginTop: '16px',
    marginBottom: '16px',
    flexGrow: 1,
  },
  paper: {
    padding: '16px',
    marginBottom: '16px',
  },
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <EventProvider>
          <Router>
            <CssBaseline />
            <Header />
            <Container component="main" style={styles.main}>
              <Grid container justifyContent="center">
                <Grid item xs={12} md={8} lg={6}>
                  <Paper style={styles.paper}>
                    <Routes>
                      <Route path="/login" element={<Login />} />
                      <Route path="/" element={<PrivateRoute><EventList /></PrivateRoute>} />
                      <Route path="/events/new" element={<PrivateRoute><EventForm /></PrivateRoute>} />
                      <Route path="/calendar" element={<PrivateRoute><MyCalendar /></PrivateRoute>} />
                    </Routes>
                  </Paper>
                </Grid>
              </Grid>
            </Container>
          </Router>
        </EventProvider>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;
