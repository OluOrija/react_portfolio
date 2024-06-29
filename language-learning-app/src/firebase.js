// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD_sXf0u5DGPZ2IDgjkQ2BGMSE5H5MilZI",
    authDomain: "language-learning-app-28858.firebaseapp.com",
    projectId: "language-learning-app-28858",
    storageBucket: "language-learning-app-28858.appspot.com",
    messagingSenderId: "866298842788",
    appId: "1:866298842788:web:9d822214d9fab8319da031",
    measurementId: "G-XDVCZVQE7P"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app); // Get the auth instance from initialized app
  const db = getFirestore(app); // Get the firestore instance from initialized app
  
  export { auth, db };
