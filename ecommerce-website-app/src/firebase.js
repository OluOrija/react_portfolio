// firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAQRVuaGuVmqiAmkCUuylXswI4X6KvUFaU",
    authDomain: "ecommerce-website-app-5dc2b.firebaseapp.com",
    projectId: "ecommerce-website-app-5dc2b",
    storageBucket: "ecommerce-website-app-5dc2b.appspot.com",
    messagingSenderId: "114906209695",
    appId: "1:114906209695:web:55f62ad34a8cfddc95b1aa",
    measurementId: "G-10716Q5JW2"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
