import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

/* FIREBASE */

const FIREBASE_CONFIG = {
    apiKey: 'AIzaSyCHgpf6gVX8bV_GtU8QyQMETf9bLt3PfJY',
    authDomain: 'homeless-app-60c8a.firebaseapp.com',
    databaseURL: 'https://homeless-app-60c8a.firebaseio.com',
    projectId: 'homeless-app-60c8a',
    storageBucket: 'homeless-app-60c8a.appspot.com',
    messagingSenderId: '428503372541'
};
firebase.initializeApp(FIREBASE_CONFIG);

/* END - FIREBASE */

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
