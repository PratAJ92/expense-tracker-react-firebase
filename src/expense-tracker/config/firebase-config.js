// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_FIREBASE_API_KEY}`,
  authDomain: "expense-tracker-d5a34.firebaseapp.com",
  projectId: "expense-tracker-d5a34",
  storageBucket: "expense-tracker-d5a34.appspot.com",
  messagingSenderId: "369329796402",
  appId: "1:369329796402:web:9a3b986d3065ef8862532b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
export const db = getFirestore(app)


// firebase login
// firebase init
// firebase deploy