// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "clothing-app-ccacb.firebaseapp.com",
  projectId: "clothing-app-ccacb",
  storageBucket: "clothing-app-ccacb.appspot.com",
  messagingSenderId: "296644709691",
  appId: "1:296644709691:web:53e3a8332f20245d573b1e",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
