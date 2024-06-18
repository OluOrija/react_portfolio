# Calendar App with React and Material UI

This project is a simple calendar application developed using React.js and Material UI. It allows users to manage events, set reminders, and view events on a monthly calendar.

## Features

- Display events on a monthly calendar view.
- Add new events with title, start date, and end date.
- Receive reminders for events that are happening now.

## Technologies Used

- React.js
- Material UI
- react-big-calendar for calendar functionality
- react-toastify for notifications

## Setup Instructions

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd calendar-app

2. **Install dependencies:**
    npm install

3. **Start the application:**
    npm start


## Usage
- Adding Events: Click on the "Add Event" button to open a dialog. Enter the event details (title, start date, end date) and click "Save".
- Viewing Events: Events will be displayed on the calendar. Click on an event to view details.
- Receiving Reminders: Reminders for events happening now will appear as notifications.    

## Folder Structure

    calendar-app/
├── public/
└── src/
    ├── components/
    │   ├── Calendar.js
    │   ├── EventDialog.js
    │   └── ...
    ├── App.js
    ├── index.js
    ├── theme.js
    └── ...
