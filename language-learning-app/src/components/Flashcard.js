// src/components/Flashcard.js
import React, { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import './Flashcard.css'; // Create this CSS file for additional styles

const Flashcard = ({ word, definition }) => {
  const [showDefinition, setShowDefinition] = useState(false);
  const props = useSpring({ opacity: showDefinition ? 1 : 0, transform: showDefinition ? 'rotateY(180deg)' : 'rotateY(0deg)' });

  return (
    <animated.div className="flashcard" style={props} onClick={() => setShowDefinition(!showDefinition)}>
      <div className="flashcard-content">
        {showDefinition ? definition : word}
      </div>
    </animated.div>
  );
};

export default Flashcard;
