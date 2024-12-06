// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1h-cDcIiUlMGWZ2w8bC2_3uHuP-uebIY",
  authDomain: "proyectico1.firebaseapp.com",
  projectId: "proyectico1",
  storageBucket: "proyectico1.firebasestorage.app",
  messagingSenderId: "899775445374",
  appId: "1:899775445374:web:5812414520a28a99e91b2f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase(app);