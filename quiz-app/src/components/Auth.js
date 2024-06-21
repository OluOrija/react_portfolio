import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../store/authSlice';
import { auth } from '../firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { Button, TextField, Typography, Box, Paper, Grid } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Avatar from '@mui/material/Avatar';


const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleAuth = async () => {
    try {
      let userCredential;
      if (isSignUp) {
        userCredential = await createUserWithEmailAndPassword(auth, email, password);
      } else {
        userCredential = await signInWithEmailAndPassword(auth, email, password);
      }
      dispatch(login(userCredential.user));
    } catch (error) {
      console.error("Error authenticating user", error);
    }
  };

  return (
    <Grid container justifyContent="center" alignItems="center" style={{ minHeight: '100vh' }}>
      <Grid item xs={12} md={4}>
        <Box mt={4} component={Paper} p={3} textAlign="center">
          <Avatar style={{ margin: 'auto', backgroundColor: '#3f51b5' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography variant="h5" gutterBottom>{isSignUp ? "Sign Up" : "Sign In"}</Typography>
          <TextField
            label="Email"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Password"
            type="password"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button variant="contained" color="primary" onClick={handleAuth} fullWidth>
            {isSignUp ? "Sign Up" : "Sign In"}
          </Button>
          <Button variant="text" color="secondary" onClick={() => setIsSignUp(!isSignUp)} fullWidth>
            {isSignUp ? "Already have an account? Sign In" : "Don't have an account? Sign Up"}
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Auth;
