// src/pages/Login.js
import React, { useState } from 'react';
import { Container, TextField, Button, Paper, Typography } from '@mui/material';
import { useAuth } from '../contexts/AuthContext';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();

  const handleLogin = async () => {
    try {
      await login(email, password);
    } catch (error) {
      console.error("Failed to login", error);
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
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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
