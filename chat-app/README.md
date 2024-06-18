# React Chat Application

A real-time chat application built with React and Material UI, incorporating Firebase for authentication and Firestore for real-time messaging.

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Components](#components)
  - [SignUp](#signup)
  - [SignIn](#signin)
  - [Chat](#chat)
  - [PrivateRoute](#privateroute)
- [Routing](#routing)
- [Firebase Configuration](#firebase-configuration)
- [Deployment](#deployment)
- [License](#license)

## Features
- User authentication with Firebase
- Real-time messaging with Firestore
- Protected routes for authenticated users
- User-friendly interface with Material UI

## Installation

### Prerequisites
- Node.js and npm installed

### Steps
1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/react-chat-app.git
   cd react-chat-app

2. **Install dependencies:**
    npm install

3. **Setup Firebase:**
    - Create a Firebase project in the Firebase Console.
    - Enable Email/Password authentication in the Firebase Authentication section.
    - Create a Firestore database in the Firebase Console.

4. **Configure Firebase:**
    - Follow instructions from the firbase dashboard

5. **Start the application:**
    npm start

## Usage
### Sign Up:

    Navigate to /signup to create a new account.
    Sign In:

    Navigate to /signin to log in with an existing account.
    Chat:

    Once signed in, you will be redirected to the /chat page where you can send and receive messages in real-time.

## Project Structure    
    src/
    ├── components/
    │   ├── SignUp.js
    │   ├── SignIn.js
    │   ├── Chat.js
    │   ├── PrivateRoute.js
    ├── firebase.js
    ├── App.js
    ├── index.js

## Components
- SignUp : Handles user registration with Firebase authentication.
- SignIn : Handles user login with Firebase authentication.
- Chat : Displays and handles real-time messaging.
- PrivateRoute : Protects routes that require authentication.

### Firebase Configuration
- Ensure you have your Firebase configuration set up correctly in firebase.js: