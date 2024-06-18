// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDW38PhzINtQnWs2caNC4Ry-E6EWWK8zrI",
  authDomain: "expensetracker-react-app.firebaseapp.com",
  projectId: "expensetracker-react-app",
  storageBucket: "expensetracker-react-app.appspot.com",
  messagingSenderId: "416366707992",
  appId: "1:416366707992:web:a7e3270bcf827d455bca6d",
  measurementId: "G-ER32RJL8BV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const auth = getAuth(app);