// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAquPFszkyxo7suZQ1C0fX30XEldpjT6gI",
  authDomain: "netflix-d44e6.firebaseapp.com",
  projectId: "netflix-d44e6",
  storageBucket: "netflix-d44e6.appspot.com",
  messagingSenderId: "982913829147",
  appId: "1:982913829147:web:65437523a6cefeb1bb2bbe",
  measurementId: "G-TF9DTDZ3TX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();