import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase';

var config = {
  apiKey: 'AIzaSyBa8nygAxx-25vLMWGJql98CahU1MZ7jCM',
  authDomain: 'melp-app.firebaseapp.com',
  databaseURL: 'https://melp-app.firebaseio.com',
  projectId: 'melp-app',
  storageBucket: 'melp-app.appspot.com',
  messagingSenderId: '324771434568',
};
firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
