// v9 compat packages are API compatible with v8 code
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyBDayJjCPbtXl9aogYzf8ZYJz5hRie7Q4w",
  authDomain: "react-chat-app-649da.firebaseapp.com",
  projectId: "react-chat-app-649da",
  storageBucket: "react-chat-app-649da.appspot.com",
  messagingSenderId: "189470990240",
  appId: "1:189470990240:web:4a66cc34b750fcad7f4ec5",
  measurementId: "G-RYFTQV7SNH"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();