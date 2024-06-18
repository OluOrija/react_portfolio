
// src/api.js

import axios from 'axios';

const API_ID = '59a227a6'; // Replace with your Edamam API ID
const API_KEY = 'd23cbd27db88e3265e02bdb222f94fff'; // Replace with your Edamam API Key

export const fetchRecipes = async (query) => {
  const url = `https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}`;
  const response = await axios.get(url);
  return response.data.hits;
};
