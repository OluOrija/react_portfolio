# Quiz App

This is a simple quiz application built with React, Redux, Material-UI, and Firebase. The app allows users to create quizzes with multiple-choice questions, take quizzes, and track their scores. It also includes user authentication and quiz categorization features.

## Features

- User Authentication (Sign Up/Sign In)
- Create quizzes with multiple-choice questions
- Filter quizzes by categories
- Take quizzes and track scores
- Secure routes using protected routes

## Tech Stack

- **Frontend:** React, Redux, Material-UI
- **Backend:** Firebase Authentication

## Installation

### Prerequisites

- Node.js and npm installed
- Firebase project setup

### Steps

1. **Clone the repository:**

    ```bash
    git clone https://github.com/yourusername/quiz-app.git
    cd quiz-app
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Setup Firebase:**

    Create a Firebase project at [Firebase Console](https://console.firebase.google.com/).

    Configure Firebase in the project by replacing the Firebase configuration in `firebase.js` with your Firebase project credentials.

    ```javascript
    import { initializeApp } from "firebase/app";
    import { getAuth } from "firebase/auth";

    const firebaseConfig = {
      apiKey: "YOUR_API_KEY",
      authDomain: "YOUR_AUTH_DOMAIN",
      projectId: "YOUR_PROJECT_ID",
      storageBucket: "YOUR_STORAGE_BUCKET",
      messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
      appId: "YOUR_APP_ID"
    };

    const app = initializeApp(firebaseConfig);
    export const auth = getAuth(app);
    ```

4. **Run the application:**

    ```bash
    npm start
    ```

    The application will be available at `http://localhost:3000`.

## Project Structure

    ```quiz-app/
        ├── public/
        ├── src/
        │ ├── components/
        │ │ ├── Auth.js
        │ │ ├── ProtectedRoute.js
        │ │ ├── Quiz.js
        │ │ ├── QuizCreator.js
        │ │ ├── QuizList.js
        │ │ └── Score.js
        │ ├── store/
        │ │ ├── authSlice.js
        │ │ ├── quizSlice.js
        │ │ └── store.js
        │ ├── App.js
        │ ├── firebase.js
        │ ├── index.js
        │ └── ... other files
        ├── .gitignore
        ├── package.json
        ├── README.md
        └── ... other files
    ```    


## Usage

### Authentication

- Users can sign up and log in using their email and password.

### Creating a Quiz

- Authenticated users can create a new quiz by providing a title, selecting a category, and adding multiple-choice questions.

### Taking a Quiz

- Users can browse quizzes filtered by categories and take them. After completing a quiz, users can see their score.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

## License

This project is licensed under the MIT License.

## Acknowledgements

- [React](https://reactjs.org/)
- [Redux](https://redux.js.org/)
- [Material-UI](https://mui.com/)
- [Firebase](https://firebase.google.com/)

---

Feel free to enhance and customize the app as per your needs. Happy coding!
