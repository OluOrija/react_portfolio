// src/components/Pronunciation.js
import React, { useState } from 'react';

const Pronunciation = ({ text }) => {
  const [isSpeaking, setIsSpeaking] = useState(false);

  const handleSpeak = () => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      speechSynthesis.speak(utterance);
      setIsSpeaking(true);
      utterance.onend = () => setIsSpeaking(false);
    } else {
      alert('Speech Synthesis is not supported in your browser.');
    }
  };

  return (
    <div className="pronunciation">
      <button onClick={handleSpeak} disabled={isSpeaking}>
        {isSpeaking ? 'Speaking...' : 'Speak'}
      </button>
    </div>
  );
};

export default Pronunciation;
