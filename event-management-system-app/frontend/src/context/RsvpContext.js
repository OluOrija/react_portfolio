// src/context/RsvpContext.js
import React, { createContext, useState, useContext } from 'react';
import axios from 'axios';

const RsvpContext = createContext();

export const RsvpProvider = ({ children }) => {
  const [rsvps, setRsvps] = useState([]);

  const addRsvp = async (newRsvp) => {
    try {
      const response = await axios.post('/api/rsvps', newRsvp);
      setRsvps([...rsvps, response.data]);
    } catch (error) {
      console.error('Error adding RSVP:', error.message);
    }
  };

  return (
    <RsvpContext.Provider value={{ rsvps, addRsvp }}>
      {children}
    </RsvpContext.Provider>
  );
};

export const useRsvp = () => useContext(RsvpContext);
