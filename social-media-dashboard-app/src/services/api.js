import axios from 'axios';

const BASE_URL = 'https://api.socialmedia.com';

export const getSocialMediaData = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/data`);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export const schedulePost = async (postDetails) => {
  try {
    const response = await axios.post(`${BASE_URL}/schedule`, postDetails);
    return response.data;
  } catch (error) {
    console.error('Error scheduling post:', error);
    throw error;
  }
};
