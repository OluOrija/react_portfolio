import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { getHistoricalData } from '../services/stockService';

const StockChart = ({ symbol }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchHistoricalData = async () => {
      const result = await getHistoricalData(symbol);
      const timeSeries = result['Time Series (Daily)'];
      const formattedData = Object.keys(timeSeries).map(date => ({
        time: date,
        price: timeSeries[date]['1. open']
      }));
      setData(formattedData);
    };

    fetchHistoricalData();
  }, [symbol]);

  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart
        data={data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="time" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="price" stroke="#8884d8" activeDot={{ r: 8 }} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default StockChart;
