// src/context/EventContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';

const EventContext = createContext();

export const EventProvider = ({ children }) => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await axios.get('/api/events');
      setEvents(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching events:', error.message);
    }
  };

  const addEvent = async (newEvent) => {
    try {
      const response = await axios.post('/api/events', newEvent);
      setEvents([...events, response.data]);
    } catch (error) {
      console.error('Error adding event:', error.message);
    }
  };

  const deleteEvent = async (eventId) => {
    try {
      await axios.delete(`/api/events/${eventId}`);
      const updatedEvents = events.filter((event) => event._id !== eventId);
      setEvents(updatedEvents);
    } catch (error) {
      console.error('Error deleting event:', error.message);
    }
  };

  return (
    <EventContext.Provider value={{ events, loading, addEvent, deleteEvent }}>
      {children}
    </EventContext.Provider>
  );
};

export const useEvent = () => useContext(EventContext);
