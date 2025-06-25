// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBLns0Ttm0NLwkSoiiR2jkGvBuUFJh9qi8",
  authDomain: "travelly-auth-5e9e0.firebaseapp.com",
  projectId: "travelly-auth-5e9e0",
  storageBucket: "travelly-auth-5e9e0.firebasestorage.app",
  messagingSenderId: "549518099201",
  appId: "1:549518099201:web:a19b78f8eb868a84259100",
  measurementId: "G-BM48P2NSQN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);

export const db = getFirestore(app);  