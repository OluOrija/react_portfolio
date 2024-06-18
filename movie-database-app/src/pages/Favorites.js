import React from 'react';
import { useSelector } from 'react-redux';
import MovieList from '../components/MovieList';

const Favorites = () => {
  const favoriteMovies = useSelector((state) => state.movies.favoriteMovies);

  return (
    <div>
      <h2>Favorite Movies</h2>
      {favoriteMovies.length > 0 ? (
        <MovieList movies={favoriteMovies} />
      ) : (
        <p>No favorite movies yet.</p>
      )}
    </div>
  );
};

export default Favorites;
