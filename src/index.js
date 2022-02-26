import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
import './index.css';
import App from './App';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBteQQpbu_oTO-iHxk8afjWB-xZEi3sa8E",
  authDomain: "whoopie-co.firebaseapp.com",
  projectId: "whoopie-co",
  storageBucket: "whoopie-co.appspot.com",
  messagingSenderId: "463487174442",
  appId: "1:463487174442:web:8d92f9bfae564109978053",
  measurementId: "G-2XK60DG0TM"
};

// const analytics = getAnalytics(app);


ReactDOM.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
  document.getElementById('root')
);

