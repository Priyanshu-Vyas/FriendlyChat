/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {
  /* TODO: ADD YOUR FIREBASE CONFIGURATION OBJECT HERE */
  apiKey: "AIzaSyDFzP8mbBX9AlDz-q17RaEuBX-EYXwiB_w",
  authDomain: "friendlychat-8d3b4.firebaseapp.com",
  projectId: "friendlychat-8d3b4",
  storageBucket: "friendlychat-8d3b4.appspot.com",
  messagingSenderId: "1039424051635",
  appId: "1:1039424051635:web:5ba71566d659d5ab8493c6"
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}