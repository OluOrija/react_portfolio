// src/pages/Login.js
import React, { useState } from 'react';
import { Container, TextField, Button, Paper, Typography } from '@mui/material';
import { useAuth } from '../contexts/AuthContext';

function Login() {
  const [username, setUsername] = useState('');
  const { login } = useAuth();

  const handleLogin = () => {
    if (username) {
      login(username);
    }
  };

  return (
    <Container maxWidth="sm">
      <Paper style={{ padding: 16, marginTop: 16 }}>
        <Typography variant="h4" gutterBottom>
          Login
        </Typography>
        <TextField
          fullWidth
          label="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          margin="normal"
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleLogin}
          style={{ marginTop: 16 }}
        >
          Login
        </Button>
      </Paper>
    </Container>
  );
}

export default Login;
