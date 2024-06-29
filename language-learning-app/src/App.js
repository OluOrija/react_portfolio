// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import FlashcardsPage from './pages/FlashcardsPage';
import QuizPage from './pages/QuizPage';
import PronunciationPage from './pages/PronunciationPage';
import Auth from './components/Auth';
import { AuthProvider, useAuth } from './contexts/AuthContext'; // Ensure AuthProvider is imported
import './styles/App.css';

const PrivateRoute = ({ component: Component }) => {
  const { currentUser } = useAuth();
  return currentUser ? <Component /> : <Navigate to="/auth" />;
};

const App = () => {
  return (
    <AuthProvider> {/* Ensure AuthProvider wraps your entire application */}
      <Router>
        <Navbar />
        <Routes>
          <Route path="/flashcards" element={<PrivateRoute component={FlashcardsPage} />} />
          <Route path="/quiz" element={<PrivateRoute component={QuizPage} />} />
          <Route path="/pronunciation" element={<PrivateRoute component={PronunciationPage} />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="*" element={<Navigate to="/flashcards" />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
