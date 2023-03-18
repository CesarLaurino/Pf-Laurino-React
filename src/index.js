import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArCDoRxrpGrnMU_InRvYfk8pW-oItHFJg",
  authDomain: "proyectofinalreact-laurino.firebaseapp.com",
  projectId: "proyectofinalreact-laurino",
  storageBucket: "proyectofinalreact-laurino.appspot.com",
  messagingSenderId: "619451187460",
  appId: "1:619451187460:web:883ca4b368807420461051"
};

initializeApp(firebaseConfig);
