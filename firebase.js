// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBS3uRbq9LHzWJkflfULYABSpO8a0km430",
  authDomain: "inventory-management-ebf27.firebaseapp.com",
  projectId: "inventory-management-ebf27",
  storageBucket: "inventory-management-ebf27.appspot.com",
  messagingSenderId: "479930102904",
  appId: "1:479930102904:web:064a77a3b0d615dab3298d",
  measurementId: "G-Z7GEVBGCS7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export {firestore};