// src/components/RecipeList.js

import React from 'react';
import { Card, CardContent, CardMedia, Typography, Grid } from '@mui/material';

const RecipeList = ({ recipes, onSelectRecipe }) => {
  return (
    <Grid container spacing={2}>
      {recipes.map((recipe, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card onClick={() => onSelectRecipe(recipe)}>
            <CardMedia
              component="img"
              height="140"
              image={recipe.recipe.image}
              alt={recipe.recipe.label}
            />
            <CardContent>
              <Typography variant="h6">{recipe.recipe.label}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default RecipeList;
