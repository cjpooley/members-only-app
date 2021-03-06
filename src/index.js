import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import 'firebase/analytics';
import 'firebase/auth';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const firebaseConfig = {
  apiKey: "AIzaSyDoH9pkJ_WeX5faKs4vzK0cMKCwqajx_eY",
  authDomain: "members-only-a30b3.firebaseapp.com",
  projectId: "members-only-a30b3",
  storageBucket: "members-only-a30b3.appspot.com",
  messagingSenderId: "224272528762",
  appId: "1:224272528762:web:2e671d35b408425d5892c3",
  measurementId: "G-CP9FKLPJN9"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
