import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import { TextField, Button, Container } from '@mui/material';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Use the useNavigate hook

  const handleSignIn = async () => {
    try {
      await auth.signInWithEmailAndPassword(email, password);
      navigate('/chat'); // Redirect to chat page on successful sign-in
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container>
      <h2>Sign In</h2>
      <TextField
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        fullWidth
      />
      <TextField
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        fullWidth
      />
      <Button onClick={handleSignIn} variant="contained" color="primary">
        Sign In
      </Button>
    </Container>
  );
};

export default SignIn;
