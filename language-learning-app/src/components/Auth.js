// src/components/Auth.js
import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase'; // Import 'auth' instance from firebase.js

const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(true);
  const navigate = useNavigate();

  const handleAuth = async () => {
    try {
      if (isSignUp) {
        await createUserWithEmailAndPassword(auth, email, password);
        console.log('User signed up successfully');
      } else {
        await signInWithEmailAndPassword(auth, email, password);
        console.log('User signed in successfully');
      }
      navigate('/flashcards'); // Redirect to flashcards page upon success
    } catch (error) {
      console.error('Error with authentication:', error);
    }
  };

  return (
    <div className="auth">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button onClick={handleAuth}>
        {isSignUp ? 'Sign Up' : 'Sign In'}
      </button>
      <button onClick={() => setIsSignUp(!isSignUp)}>
        {isSignUp ? 'Switch to Sign In' : 'Switch to Sign Up'}
      </button>
    </div>
  );
};

export default Auth;
