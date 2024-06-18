import axios from 'axios';

const API_KEY = '66301b75';
const BASE_URL = 'http://www.omdbapi.com/';

export const fetchMovies = async (query) => {
  const response = await axios.get(`${BASE_URL}?s=${query}&apikey=${API_KEY}`);
  return response.data;
};
