// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/flashcards">Flashcards</Link>
      <Link to="/quiz">Quiz</Link>
      <Link to="/pronunciation">Pronunciation</Link>
    </nav>
  );
};

export default Navbar;
