
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import getFirestore from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBteQQpbu_oTO-iHxk8afjWB-xZEi3sa8E",
  authDomain: "whoopie-co.firebaseapp.com",
  projectId: "whoopie-co",
  storageBucket: "whoopie-co.appspot.com",
  messagingSenderId: "463487174442",
  appId: "1:463487174442:web:8d92f9bfae564109978053",
  measurementId: "G-2XK60DG0TM"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)