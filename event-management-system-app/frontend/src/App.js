import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container, CssBaseline, Grid, makeStyles, Paper, ThemeProvider, createMuiTheme } from '@material-ui/core';
import { AuthProvider } from './context/AuthContext';
import { EventProvider } from './context/EventContext';
import PrivateRoute from './components/PrivateRoute';
import Header from './components/Header';
import Login from './components/Login';
import EventList from './components/EventList';
import EventForm from './components/EventForm';
import MyCalendar from './components/Calendar';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  main: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <EventProvider>
          <Router>
            <CssBaseline />
            <Header />
            <Container component="main" className={classes.main}>
              <Grid container justify="center">
                <Grid item xs={12} md={8} lg={6}>
                  <Paper className={classes.paper}>
                    <Switch>
                      <Route exact path="/login" component={Login} />
                      <PrivateRoute exact path="/" component={EventList} />
                      <PrivateRoute exact path="/events/new" component={EventForm} />
                      <PrivateRoute exact path="/calendar" component={MyCalendar} />
                    </Switch>
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
