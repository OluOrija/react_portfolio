import { createSlice } from '@reduxjs/toolkit';

const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    favoriteMovies: []
  },
  reducers: {
    addFavorite: (state, action) => {
      state.favoriteMovies.push(action.payload);
    },
    removeFavorite: (state, action) => {
      state.favoriteMovies = state.favoriteMovies.filter(
        movie => movie.imdbID !== action.payload.imdbID
      );
    }
  }
});

export const { addFavorite, removeFavorite } = moviesSlice.actions;
export default moviesSlice.reducer;
