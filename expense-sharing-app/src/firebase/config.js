// src/firebase/config.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBdcTPNxmXYuyp69bUGjnwCScS0ydiTIbE",
    authDomain: "expense-sharing-app-ba2ec.firebaseapp.com",
    projectId: "expense-sharing-app-ba2ec",
    storageBucket: "expense-sharing-app-ba2ec.appspot.com",
    messagingSenderId: "784790452497",
    appId: "1:784790452497:web:a79902c67735001770b4b0",
    measurementId: "G-2N06BW16KM"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app); // Initialize Firestore

export { auth, db };
