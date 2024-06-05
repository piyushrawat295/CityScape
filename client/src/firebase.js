// src/firebase.js

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "cityscape-33fd9.firebaseapp.com",
  projectId: "cityscape-33fd9",
  storageBucket: "cityscape-33fd9.appspot.com",
  messagingSenderId: "647626413157",
  appId: "1:647626413157:web:4bc99c4eed1330c2a1a28c",
  measurementId: "G-FRWYMDLZL8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Export the initialized app and analytics
export { app, analytics };

