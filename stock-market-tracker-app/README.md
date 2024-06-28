# Stock Market Tracker App

A simple stock market tracker app built with React, Material-UI, Axios, and Recharts. This application fetches and displays real-time stock data, provides a search functionality to look up different stocks, and shows detailed historical charts.

## Features

- **Real-Time Updates**: Stock prices are updated every minute.
- **Search Functionality**: Look up and display information for different stock symbols.
- **Detailed Charts**: View historical stock data in an interactive chart.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/stock-market-tracker.git
   cd stock-market-tracker

2. **Install Dependencies**:
    npm install

3. **Create .env file**:
    Create a .env file in the root directory and add your Alpha Vantage API key:    
    ```makefile
        REACT_APP_ALPHA_VANTAGE_API_KEY=your_api_key_here
    ```

4. **Start the development server**
    npm start

## Project Structure
```
    src/
    components/
        StockCard.js      // Component to display individual stock information
        StockChart.js     // Component to display stock historical data chart
        StockList.js      // Component to list stocks and handle search functionality
    services/
        stockService.js   // Service to fetch stock data from Alpha Vantage API
    App.js              // Main app component
    index.js            // Entry point for the React app
```        
## Dependencies
    React
    material-ui: For UI components.
    axios: For making API requests.
    recharts: For charting.
    moment: For date manipulation.

## License
This project is licensed under the MIT License. See the LICENSE file for details.


This `README.md` provides an overview of the project, features implemented, installation instructions, project structure, usage details, and licensing information. Make sure to update the repository URL and any other specific details as necessary.    