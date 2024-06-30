# Travel Planner App

## Overview

The Travel Planner App is a web application built with React that allows users to book accommodations, find attractions, and create itineraries for their trips. The app integrates with external travel APIs to fetch real-time data for accommodations and attractions.

## Features

- **Book Accommodation:** Search and book accommodations based on the user's location.
- **Find Attractions:** Discover attractions at any location.
- **Create Itinerary:** Create and manage trip itineraries.

## Technologies Used

- **React:** A JavaScript library for building user interfaces.
- **Axios:** A promise-based HTTP client for the browser and Node.js.
- **React Router:** A collection of navigational components that compose declaratively with your application.
- **Travel APIs:** Used to fetch data for accommodations and attractions.
    - Foursquare : https://docs.foursquare.com/developer/reference/search-data
    - RapidAPI (Hotels API) : https://rapidapi.com/apidojo/api/hotels4

## Project Structure

```
travel-planner/
    ├── public/
    │ └── index.html
    ├── src/
    │ ├── components/
    │ │ ├── Header.js
    │ │ ├── Accommodation.js
    │ │ ├── Attractions.js
    │ │ ├── Itinerary.js
    │ ├── pages/
    │ │ ├── Home.js
    │ │ ├── BookAccommodation.js
    │ │ ├── FindAttractions.js
    │ │ ├── CreateItinerary.js
    │ ├── App.js
    │ ├── index.js
    │ ├── api/
    │ │ ├── accommodationAPI.js
    │ │ ├── attractionsAPI.js
    │ ├── styles/
    │ │ ├── App.css
    │ │ ├── Header.css
    │ │ ├── Accommodation.css
    │ │ ├── Attractions.css
    │ │ ├── Itinerary.css
```

## Getting Started

### Prerequisites

Make sure you have Node.js and npm installed on your machine. You can download them from [here](https://nodejs.org/).

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/travel-planner.git
   cd travel-planner

2. **Install Dependencies**:
    npm install

3. **Create a .env file in the root directory and add your API keys:**
    REACT_APP_ACCOMMODATION_API_KEY=your_accommodation_api_key
    REACT_APP_ATTRACTIONS_API_KEY=your_attractions_api_key

4. **Run the frontend development server**
    npm start

The app should now be running on http://localhost:3000.

### Usage

## Booking Accommodation
-   Navigate to the "Book Accommodation" page.
-   Enter a location and click "Search".
-   View the list of available accommodations.

## Finding Attractions
-   Navigate to the "Find Attractions" page.
-   Enter a location and click "Search".
-   View the list of attractions in the specified location.

## Creating an Itinerary
-   Navigate to the "Create Itinerary" page.
-   Add items to your itinerary by entering text and clicking "Add".
-   View and manage your itinerary items.

### Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

### License
This project is licensed under the MIT License. See the LICENSE file for details.