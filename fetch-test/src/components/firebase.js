import firebase from 'firebase/app'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyAj81FIklf783xdDlhdR_EZDiv8AAElD8g",
    authDomain: "netballdata-3bf2c.firebaseapp.com",
    projectId: "netballdata-3bf2c",
    storageBucket: "netballdata-3bf2c.appspot.com",
    messagingSenderId: "800673124805",
    appId: "1:800673124805:web:e576d5027292e7f8e17bac",
    measurementId: "G-Q97QER6395"
  };

// Get a Firestore instance
export const db = firebase.initializeApp(firebaseConfig).firestore()

// Export types that exists in Firestore
// This is not always necessary, but it's used in other examples
const { Timestamp, GeoPoint } = firebase.firestore
export { Timestamp, GeoPoint }