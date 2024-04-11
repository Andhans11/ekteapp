// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import 'firebase/firestore'; // If you're using Firestore
import 'firebase/auth'; // If you're using Firebase Authentication
import 'firebase/storage'; // If you're using Firebase Authentication


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBJESSg63jIa_hOzauuSoWtlVzwp80ARg",
  authDomain: "ekteapp.firebaseapp.com",
  projectId: "ekteapp",
  storageBucket: "ekteapp.appspot.com",
  messagingSenderId: "925763479169",
  appId: "1:925763479169:web:3306b83b0a42a195ce0f80"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app(); // if already initialized, use that one
}

const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
