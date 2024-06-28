import axios from 'axios';

const API_KEY = process.env.REACT_APP_ALPHA_VANTAGE_API_KEY;
const BASE_URL = 'https://www.alphavantage.co/query';

const getStockData = (symbol) => {
  return axios.get(`${BASE_URL}?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=5min&apikey=${API_KEY}`)
    .then(response => response.data);
};

const getHistoricalData = (symbol) => {
    return axios.get(`${BASE_URL}?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${API_KEY}`)
      .then(response => response.data);
  };
  
export { getStockData, getHistoricalData };
  
