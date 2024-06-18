# Movie Database App

This is a simple movie database app built with React and Material UI. It fetches movie data from the OMDb API and allows users to search for movies and add them to their favorites.

## Features

- Search for movies using the OMDb API.
- Display a list of movies with their details.
- Add or remove movies from your favorites list.
- Navigate between the home page and favorites page.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/movie-database-app.git
   cd movie-database-app
2. Install the dependencies
    npm install
3. Obtain an API key from OMDb API and replace YOUR_OMDB_API_KEY in the src/api.js file with your actual API key.
4. Start the development server 
    npm start

### Project Structure
    movie-database-app/
        ├── public/
        ├── src/
        │   ├── components/
        │   │   ├── MovieCard.js
        │   │   ├── MovieList.js
        │   │   ├── Navbar.js
        │   │   ├── SearchBar.js
        │   ├── pages/
        │   │   ├── Favorites.js
        │   │   ├── Home.js
        │   ├── redux/
        │   │   ├── moviesSlice.js
        │   │   ├── store.js
        │   ├── api.js
        │   ├── App.js
        │   ├── index.js
        ├── package.json

### Usage
#### Searching for Movies
 - Type a movie name into the search bar and click the "Search" button.
 - The app will display a list of movies that match your search query.

#### Adding/Removing Favorites
 - Click the heart icon on a movie card to add it to your favorites.
 - Click the heart icon again to remove it from your favorites.

#### Navigation
- Use the navbar to navigate between the home page and the favorites page.

### Technologies Used
- React
- Material UI
- Redux
- Axios
- React Router
- Contributing

Please feel free to submit pull requests and issues. Any contributions are welcome.

### License
This project is licensed under the MIT License - see the LICENSE file for details.


### Acknowledgments

- [OMDb API](http://www.omdbapi.com/)
- [Material UI](https://mui.com/)
- [React](https://reactjs.org/)

