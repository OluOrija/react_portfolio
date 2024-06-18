import React from 'react';
import { Card, CardContent, CardMedia, Typography, IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../redux/moviesSlice';

const MovieCard = ({ movie }) => {
  const dispatch = useDispatch();
  const favoriteMovies = useSelector((state) => state.movies.favoriteMovies);
  const isFavorite = favoriteMovies.some(fav => fav.imdbID === movie.imdbID);

  const handleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFavorite(movie));
    } else {
      dispatch(addFavorite(movie));
    }
  };

  return (
    <Card>
      <CardMedia
        component="img"
        height="140"
        image={movie.Poster}
        alt={movie.Title}
      />
      <CardContent>
        <Typography variant="h5" component="div">
          {movie.Title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {movie.Year}
        </Typography>
        <IconButton onClick={handleFavorite}>
          <FavoriteIcon color={isFavorite ? "error" : "inherit"} />
        </IconButton>
      </CardContent>
    </Card>
  );
};

export default MovieCard;
