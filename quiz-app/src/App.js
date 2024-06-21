import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Container, AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import QuizCreator from './components/QuizCreator';
import QuizList from './components/QuizList';
import Quiz from './components/Quiz';
import Score from './components/Score';
import Auth from './components/Auth';
import ProtectedRoute from './components/ProtectedRoute';

import { logout } from './store/authSlice';
import { auth } from './firebase';

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);

  const handleLogout = () => {
    auth.signOut().then(() => {
      dispatch(logout());
      navigate('/auth');
    }).catch((error) => {
      console.error("Error signing out: ", error);
    });
  };

  return (
    <Container>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={() => navigate('/')}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" style={{ flexGrow: 1 }} onClick={() => navigate('/')} cursor="pointer">
            Quiz App
          </Typography>
          {user ? (
            <Button color="inherit" onClick={handleLogout}>Logout</Button>
          ) : (
            <Button color="inherit" onClick={() => navigate('/auth')}>Login</Button>
          )}
        </Toolbar>
      </AppBar>
      <Routes>
        <Route path="/" element={<QuizList />} />
        <Route path="/create" element={<ProtectedRoute><QuizCreator /></ProtectedRoute>} />
        <Route path="/quiz/:id" element={<ProtectedRoute><Quiz /></ProtectedRoute>} />
        <Route path="/score/:id" element={<ProtectedRoute><Score /></ProtectedRoute>} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </Container>
  );
}

export default App;
