import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDpmD3WhQmNfKqHXjNmItQ81eq5z45Y2sY",
  authDomain: "react-quiz-app-d85fc.firebaseapp.com",
  projectId: "react-quiz-app-d85fc",
  storageBucket: "react-quiz-app-d85fc.appspot.com",
  messagingSenderId: "1058960710241",
  appId: "1:1058960710241:web:eb53b2d045a13a32956820",
  measurementId: "G-W77KYKYCZ0"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
