// src/pages/PronunciationPage.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Pronunciation from '../components/Pronunciation';

const PronunciationPage = () => {
  const [texts, setTexts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/pronunciation')
      .then(response => setTexts(response.data))
      .catch(error => console.error('Error fetching pronunciation texts:', error));
  }, []);

  return (
    <div className="pronunciation-page">
      {texts.map((textObj, index) => (
        <Pronunciation key={index} text={textObj.text} />
      ))}
    </div>
  );
};

export default PronunciationPage;
