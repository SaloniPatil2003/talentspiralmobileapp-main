// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDxGyctG5_MuavR1T9q8YvqfH1R9wV7OWo",
  authDomain: "talentspiral-36bec.firebaseapp.com",
  projectId: "talentspiral-36bec",
  storageBucket: "talentspiral-36bec.firebasestorage.app",
  messagingSenderId: "797344493740",
  appId: "1:797344493740:web:7ea60ea6163d890db46f09",
  measurementId: "G-SQ0PM8NXQ6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);