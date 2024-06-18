import React, { useState } from 'react';
import { fetchMovies } from '../api';
import SearchBar from '../components/SearchBar';
import MovieList from '../components/MovieList';

const Home = () => {
  const [movies, setMovies] = useState([]);

  const handleSearch = async (query) => {
    const data = await fetchMovies(query);
    if (data.Search) {
      setMovies(data.Search);
    }
  };

  const handleFavorite = (movie) => {
    // Add logic to handle favorite movies
    console.log('Favorite movie:', movie);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <MovieList movies={movies} onFavorite={handleFavorite} />
    </div>
  );
};

export default Home;
