import React, { useState, useEffect } from 'react';
import { getStockData } from '../services/stockService';
import StockCard from './StockCard';
import { Grid, TextField, Button } from '@mui/material';

const StockList = () => {
  const [stocks, setStocks] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchSymbol, setSearchSymbol] = useState('');

  const fetchStocks = async () => {
    const symbols = ['AAPL', 'GOOGL', 'MSFT', searchSymbol].filter(Boolean);
    const stockData = await Promise.all(symbols.map(symbol => getStockData(symbol)));
    const formattedData = stockData.map(data => ({
      symbol: data['Meta Data']['2. Symbol'],
      price: data['Time Series (5min)'][Object.keys(data['Time Series (5min)'])[0]]['1. open']
    }));
    setStocks(formattedData);
  };

  useEffect(() => {
    fetchStocks();
    const interval = setInterval(fetchStocks, 60000); // Update every minute
    return () => clearInterval(interval);
  }, [searchSymbol]);

  const handleSearch = () => {
    setSearchSymbol(searchQuery);
  };

  return (
    <>
      <TextField
        label="Search Stock Symbol"
        variant="outlined"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={handleSearch}>
        Search
      </Button>
      <Grid container spacing={2}>
        {stocks.map(stock => (
          <Grid item xs={12} sm={6} md={4} key={stock.symbol}>
            <StockCard stock={stock} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default StockList;
