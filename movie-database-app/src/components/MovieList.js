import React from 'react';
import { Grid } from '@mui/material';
import MovieCard from './MovieCard';

const MovieList = ({ movies, onFavorite }) => {
  return (
    <Grid container spacing={2}>
      {movies.map((movie) => (
        <Grid item xs={12} sm={6} md={4} key={movie.imdbID}>
          <MovieCard movie={movie} onFavorite={onFavorite} />
        </Grid>
      ))}
    </Grid>
  );
};

export default MovieList;
