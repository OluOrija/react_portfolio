// src/context/AuthContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDa1w-yYXI7jYCAYEFjiUmAc2nKTLRW9Cw",
    authDomain: "event-management-system-app.firebaseapp.com",
    projectId: "event-management-system-app",
    storageBucket: "event-management-system-app.appspot.com",
    messagingSenderId: "416148162225",
    appId: "1:416148162225:web:bb0e2d89cc98806f6c8490",
    measurementId: "G-6QNE7PQ2XY"
  };

firebase.initializeApp(firebaseConfig);

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const login = async (email, password) => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
    } catch (error) {
      console.error('Error logging in:', error.message);
    }
  };

  const logout = async () => {
    try {
      await firebase.auth().signOut();
    } catch (error) {
      console.error('Error logging out:', error.message);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
