// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7IxbaD0f_rjAv4epyuytkp5S3rLwY2Ms",
  authDomain: "research-kwyandt.firebaseapp.com",
  projectId: "research-kwyandt",
  storageBucket: "research-kwyandt.appspot.com",
  messagingSenderId: "1071909348475",
  appId: "1:1071909348475:web:1185907fb3d0e1e196eede",
  measurementId: "G-G6RZRTNVZB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);