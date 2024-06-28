import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import StockChart from './StockChart';

const StockCard = ({ stock }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div">
          {stock.symbol}
        </Typography>
        <Typography variant="body2">
          Price: ${stock.price}
        </Typography>
        <StockChart symbol={stock.symbol} />
      </CardContent>
    </Card>
  );
};

export default StockCard;
