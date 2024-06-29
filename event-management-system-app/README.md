# Event Management System (EMS) Project

This project is an Event Management System (EMS) developed using React for the frontend with Material-UI for styling, and Node.js with Express and MongoDB for the backend. The system allows users to manage events, RSVPs, and integrates with a basic calendar view.

## Table of Contents

- [Project Overview](#project-overview)
- [Setup Instructions](#setup-instructions)
  - [Frontend Setup](#frontend-setup)
  - [Backend Setup](#backend-setup)
- [Project Structure](#project-structure)
- [Additional Information](#additional-information)

## Project Overview

The Event Management System (EMS) includes the following features:

- **User Authentication**: Users can sign up and log in using Firebase Authentication.
- **Event Management**: Users can create, read, update, and delete events.
- **RSVP Functionality**: Users can RSVP to events with status (RSVPed, Attending, Not Attending).
- **Calendar Integration**: Events are displayed on a basic calendar using `react-big-calendar`.
- **Styling**: Material-UI is used for the frontend design.

## Setup Instructions

### Frontend Setup

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd event-management-system

2. **Install Dependencies**:
    npm install

3. **Setup Firebase**
    Set up Firebase:
    Go to the Firebase Console and create a new project.
    Enable Email/Password authentication in Firebase.
    Copy your Firebase configuration (API keys, etc.) and replace them in src/context/AuthContext.js.

4. **Run the frontend development server**
    npm start

The app should now be running on http://localhost:3000.


### Backend Setup
1. **Navigate to the backend directory**
    cd event-management-system-backend

2. **Install Dependencies**:
    npm install

3. **Set up MongoDB**
    Create a MongoDB database (either locally or using MongoDB Atlas).
    Copy your MongoDB connection URI and replace it in .env file.    

4. **Set environment variables**
    Create a .env file in the event-management-system-backend directory with the following:  
    ```
        PORT=5000
        MONGODB_URI=your_mongodb_connection_uri
    ```

5. **Run the backend server**
    npm start
    

## Project Structure
```
    event-management-system/          # Root directory for the frontend
    ├── public/                       # Public assets and index.html
    ├── src/                          # Source files
    │   ├── components/               # React components
    │   ├── context/                  # React context for state management
    │   ├── pages/                    # React components for different pages
    │   ├── App.js                    # Main application component
    │   ├── index.js                  # Entry point
    │   └── ...
    └── ...

    event-management-system-backend/  # Root directory for the backend
    ├── models/                       # Mongoose models (e.g., Event, Rsvp)
    ├── routes/                       # API routes (e.g., events, rsvps)
    ├── server.js                     # Express server setup
    ├── .env                          # Environment variables
    └── ...
```

## Additional Information

### Technologies Used:

-   Frontend: React, Material-UI
-   Backend: Node.js, Express, MongoDB
-   Authentication: Firebase Authentication
-   Other Libraries: react-big-calendar, axios (for API requests)

### Deployment:

-   Deploy frontend (React app) to Vercel, Netlify, or similar platforms.
-   Deploy backend (Node.js app) to Heroku or similar platforms.

### Improvements:

-   Add more robust error handling and validation.
-   Implement pagination for events.
-   Enhance styling and user interface.

## Conclusion
This project serves as a comprehensive example of building a full-stack web application using modern web technologies. Feel free to modify and extend it according to your specific requirements or learning objectives.