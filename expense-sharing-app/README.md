# Expense Sharing App

## Description

This is an Expense Sharing App built with React, Material UI, and Firebase. It allows groups of users to split expenses and track debts with user authentication and transaction management.

## Features

- User Authentication (Login/Register)
- Dashboard to view expenses and balances
- Add new expenses
- Settle up debts

## Technologies Used

- React
- Material UI for styling
- React Router DOM for routing
- Firebase for user authentication (we'll use Firebase as an example)

## Project Structue
```lua
src/
|-- components/
|   |-- Auth/
|       |-- Login.js
|       |-- Register.js
|   |-- Dashboard.js
|   |-- AddExpense.js
|   |-- SettleUp.js
|-- firebase/
|   |-- config.js
|-- App.js
|-- index.js
|-- routes.js
```

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/your-username/expense-sharing-app.git
    cd expense-sharing-app
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Set up Firebase:
    - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
    - Add your Firebase config to `src/firebase/config.js`

4. Run the app:
    ```sh
    npm start
    ```

## Usage

1. Register a new account or login with an existing account.
2. Use the dashboard to add expenses and settle up debts.

## License

This project is licensed under the MIT License.
