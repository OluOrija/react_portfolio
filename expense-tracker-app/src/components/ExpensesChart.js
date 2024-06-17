// src/components/ExpensesChart.js
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto' // Needed for the bar import to work
import { Chart }            from 'react-chartjs-2' // Needed for the bar import to work

const ExpensesChart = ({ expenses }) => {
  const data = {
    labels: expenses.map(expense => expense.description),
    datasets: [
      {
        label: 'Expenses',
        data: expenses.map(expense => expense.amount),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  return <Bar data={data} />;
};

export default ExpensesChart;
