
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBaOyTQA1sEztq4BCJYpkHHMJ7txzNuMC8",
  authDomain: "auth-context-firebase-e618b.firebaseapp.com",
  projectId: "auth-context-firebase-e618b",
  storageBucket: "auth-context-firebase-e618b.appspot.com",
  messagingSenderId: "993675048253",
  appId: "1:993675048253:web:1ad7b9f62dd7d1468b0154"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;