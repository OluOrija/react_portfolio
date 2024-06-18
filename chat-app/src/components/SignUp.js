import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import { TextField, Button, Container } from '@mui/material';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Use the useNavigate hook

  const handleSignUp = async () => {
    try {
      await auth.createUserWithEmailAndPassword(email, password);
      navigate('/chat'); // Redirect to chat page on successful sign-up
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container>
      <h2>Sign Up</h2>
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
      <Button onClick={handleSignUp} variant="contained" color="primary">
        Sign Up
      </Button>
    </Container>
  );
};

export default SignUp;
