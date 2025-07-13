// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCT2fllNXDaS2UKg-sIrtSInHoRS4E1BDQ",
  authDomain: "tienda-dulces-mexicanos.firebaseapp.com",
  projectId: "tienda-dulces-mexicanos",
  storageBucket: "tienda-dulces-mexicanos.firebasestorage.app",
  messagingSenderId: "533514488579",
  appId: "1:533514488579:web:b7ab0fbee1a70322d27736",
  measurementId: "G-5ZW9HMY0BE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const database = getFirestore(app);