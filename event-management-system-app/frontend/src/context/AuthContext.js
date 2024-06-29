import { createContext, useState, useContext, useEffect } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

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

const AuthProvider = ({ children }) => {
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
      console.error('Login error:', error);
    }
  };

  const logout = async () => {
    try {
      await firebase.auth().signOut();
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const value = {
    currentUser,
    login,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  return useContext(AuthContext);
};

export { AuthProvider, useAuth };
export default AuthContext;
