// src/components/RecipeDetail.js

import React from 'react';
import { Dialog, DialogTitle, DialogContent, Typography, List, ListItem } from '@mui/material';

const RecipeDetail = ({ recipe, onClose }) => {
  if (!recipe) return null;

  return (
    <Dialog open={!!recipe} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>{recipe.recipe.label}</DialogTitle>
      <DialogContent>
        <img src={recipe.recipe.image} alt={recipe.recipe.label} style={{ width: '100%' }} />
        <Typography variant="h6">Ingredients</Typography>
        <List>
          {recipe.recipe.ingredientLines.map((ingredient, index) => (
            <ListItem key={index}>{ingredient}</ListItem>
          ))}
        </List>
        <Typography variant="body1">{recipe.recipe.calories.toFixed(2)} calories</Typography>
      </DialogContent>
    </Dialog>
  );
};

export default RecipeDetail;
