import axios from 'axios';

const API_KEY = process.env.REACT_APP_YOUR_FOURSQUARE_API_KEY;
const BASE_URL = 'https://api.foursquare.com/v3/places/search';

export const getAttractions = async (location) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        ll: '40.7243,-74.0018' //'5.776327,5.811982' // Replace with actual latitude and longitude
      },
      headers: {
        Authorization: API_KEY
      }
    });
    return response.data.results;
  } catch (error) {
    console.error('Error fetching attractions:', error);
    throw error;
  }
};