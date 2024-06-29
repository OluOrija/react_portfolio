// src/pages/FlashcardsPage.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Flashcard from '../components/Flashcard';

// Example of loading and error handling
const FlashcardsPage = () => {
    const [flashcards, setFlashcards] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchFlashcards = async () => {
        try {
          const response = await axios.get('http://localhost:5000/flashcards');
          setFlashcards(response.data); // Assuming response.data is an array of flashcards
          setLoading(false);
        } catch (error) {
          setError(error.message);
          setLoading(false);
        }
      };
  
      fetchFlashcards();
    }, []);
  
    if (loading) {
      return <div>Loading...</div>;
    }
  
    if (error) {
      return <div>Error: {error}</div>;
    }
  
    // return (
    //   <div className="flashcards">
    //     <h2>Flashcards</h2>
    //     {flashcards.map(flashcard => (
    //       <div key={flashcard.id} className="flashcard">
    //         <div className="front">{flashcard.front}</div>
    //         <div className="back">{flashcard.back}</div>
    //       </div>
    //     ))}
    //   </div>
    // );
    return (
        <div className="flashcards-page">
          {flashcards.map((flashcard, index) => (
            <Flashcard key={index} word={flashcard.front} definition={flashcard.back} />
          ))}
        </div>
      );
  };
  
export default FlashcardsPage;