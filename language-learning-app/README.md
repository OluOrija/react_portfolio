# Language Learning App

A React-based language learning app that provides flashcards, quizzes, and pronunciation tools to help users learn new languages. The app features interactive elements and animations, and it integrates with a backend server to fetch data. User authentication is implemented using Firebase to save progress.

## Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)
- [Technologies](#technologies)
- [Contributing](#contributing)
- [License](#license)

## Features

- Flashcards for vocabulary learning with flip animations
- Quizzes to test language knowledge
- Pronunciation tools using the Web Speech API
- Backend integration for fetching data
- User authentication with Firebase
- Interactive and responsive design

## Demo

A live demo of the app can be found [here](#).

## Installation

### Prerequisites

- Node.js and npm installed on your machine
- Firebase account for authentication and database

### Backend Setup

1. Navigate to the `backend` directory and install dependencies:
    ```bash
    cd backend
    npm install
    ```

2. Start the backend server:
    ```bash
    node server.js
    ```

### Frontend Setup

1. Navigate to the root directory of the project and install dependencies:
    ```bash
    cd ..
    npm install
    ```

2. Create a `firebase.js` file in the `src` directory with your Firebase configuration:
    ```jsx
    import firebase from 'firebase/app';
    import 'firebase/auth';
    import 'firebase/firestore';

    const firebaseConfig = {
      apiKey: "YOUR_API_KEY",
      authDomain: "YOUR_AUTH_DOMAIN",
      projectId: "YOUR_PROJECT_ID",
      storageBucket: "YOUR_STORAGE_BUCKET",
      messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
      appId: "YOUR_APP_ID"
    };

    firebase.initializeApp(firebaseConfig);

    const auth = firebase.auth();
    const db = firebase.firestore();

    export { auth, db };
    ```

3. Start the frontend development server:
    ```bash
    npm start
    ```

## Usage

1. Open your browser and navigate to `http://localhost:3000`.
2. Sign up or sign in using the authentication page.
3. Access the flashcards, quizzes, and pronunciation tools through the navigation bar.

## Project Structure

The project is organized as follows:
```
    language-learning-app/
    │
    ├── backend/ # Backend server code
    │ ├── server.js # Express server setup
    │ ├── package.json # Backend dependencies
    │
    ├── public/ # Public assets
    │ ├── index.html # HTML template
    │
    ├── src/ # Frontend source code
    │ ├── components/ # Reusable React components
    │ │ ├── Flashcard.js # Flashcard component
    │ │ ├── Quiz.js # Quiz component
    │ │ ├── Pronunciation.js # Pronunciation component
    │ │ └── Navbar.js # Navigation bar component
    │ │
    │ ├── contexts/ # React context for authentication
    │ │ └── AuthContext.js # Authentication context provider
    │ │
    │ ├── pages/ # Page components
    │ │ ├── FlashcardsPage.js # Flashcards page
    │ │ ├── QuizPage.js # Quiz page
    │ │ └── PronunciationPage.js# Pronunciation page
    │ │
    │ ├── firebase.js # Firebase configuration
    │ ├── App.js # Main App component
    │ ├── index.js # Entry point for React
    │ ├── styles/ # CSS styles
    │ │ └── App.css # Main stylesheet
    │
    ├── package.json # Frontend dependencies
    └── README.md # Project documentation
```    

## API Endpoints

### Flashcards

- **GET** `/flashcards`
  - Retrieves a list of flashcards.

### Quiz

- **GET** `/quiz`
  - Retrieves quiz data.

### Pronunciation

- **GET** `/pronunciation`
  - Retrieves pronunciation texts.

## Technologies

- **Frontend**: React, Axios, React Spring
- **Backend**: Node.js, Express, Cors
- **Authentication**: Firebase
- **Styling**: CSS

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

1. Fork the repository.
2. Create a new branch: `git checkout -b feature-branch-name`.
3. Make your changes and commit them: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature-branch-name`.
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
