//** App.tsx - WEB ***//
import React, { Component } from 'react';
import firebase from 'firebase';
import WebRoutes from './WebRoutes';
import HomeScreen from '../../components/src/HomeScreen';
import './App.css';
// import {Elements} from '@stripe/react-stripe-js';
// import {loadStripe} from '@stripe/stripe-js';

if (!HomeScreen.instance) {
  const defaultProps = {
    navigation: null,
    id: 'HomeScreen'
  };
  const homeScreen = new HomeScreen(defaultProps);
}

const firebaseAPI = firebase.initializeApp({
  apiKey: "AIzaSyDloVdcrurl9h2HbDCd3i6ISHcxB9d7G-Y",
  authDomain: "carbon-app-9d1a2.firebaseapp.com",
  projectId: "carbon-app-9d1a2",
  storageBucket: "carbon-app-9d1a2.appspot.com",
  messagingSenderId: "472937068921",
  appId: "1:472937068921:web:56f33c3bae4ba0fd8197a8",
  measurementId: "G-H1RZW8HM9M"
});

class App extends Component {
  render() {
    const defaultAnalytics = firebaseAPI.analytics();
    defaultAnalytics.logEvent('APP_Loaded');
    return (
      <>
        <WebRoutes />
      </>
    );
  }
}

export default App;
