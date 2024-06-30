import axios from 'axios';

const API_KEY = process.env.REACT_APP_YOUR_RAPIDAPI_KEY;
const BASE_URL = 'https://hotels4.p.rapidapi.com/properties/list';

export const getAccommodations = async (location) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        destinationId: 1506246, // Replace with actual destination ID
        pageNumber: '1',
        pageSize: '25',
        checkIn: '2023-07-01',
        checkOut: '2023-07-02',
        adults1: '1'
      },
      headers: {
        'X-RapidAPI-Key': API_KEY,
        'X-RapidAPI-Host': 'hotels4.p.rapidapi.com'
      }
    });
    return response.data.data.body.searchResults.results;
  } catch (error) {
    console.error('Error fetching accommodations:', error);
    throw error;
  }
};