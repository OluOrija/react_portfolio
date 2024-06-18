// src/App.js

import React, { useState } from 'react';
import { Container, Typography } from '@mui/material';
import SearchBar from './components/SearchBar';
import RecipeList from './components/RecipeList';
import RecipeDetail from './components/RecipeDetail';
import { fetchRecipes } from './api';

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const handleSearch = async (query) => {
    const result = await fetchRecipes(query);
    setRecipes(result);
  };

  const handleSelectRecipe = (recipe) => {
    setSelectedRecipe(recipe);
  };

  const handleCloseDetail = () => {
    setSelectedRecipe(null);
  };

  return (
    <Container>
      <Typography variant="h3" align="center" gutterBottom>
        Recipe Finder
      </Typography>
      <SearchBar onSearch={handleSearch} />
      <RecipeList recipes={recipes} onSelectRecipe={handleSelectRecipe} />
      <RecipeDetail recipe={selectedRecipe} onClose={handleCloseDetail} />
    </Container>
  );
};

export default App;
