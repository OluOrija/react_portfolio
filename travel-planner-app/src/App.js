import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import BookAccommodation from './pages/BookAccommodation';
import FindAttractions from './pages/FindAttractions';
import CreateItinerary from './pages/CreateItinerary';
import './styles/App.css';

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book-accommodation" element={<BookAccommodation />} />
        <Route path="/find-attractions" element={<FindAttractions />} />
        <Route path="/create-itinerary" element={<CreateItinerary />} />
      </Routes>
    </div>
  );
};

export default App;
