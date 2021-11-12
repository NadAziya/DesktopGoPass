import firebase from "firebase/app";
import "firebase/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyB9vOF7fgNTrP7tElOi2PYdsHW8pjX2i-Q",
  authDomain: "gopass-de5b1.firebaseapp.com",
  projectId: "gopass-de5b1",
  storageBucket: "gopass-de5b1.appspot.com",
  messagingSenderId: "812338762944",
  appId: "1:812338762944:web:6a74c5dec525e23ed60925",
  measurementId: "G-NJ2NB561KL",
});

const db = firebaseApp.firestore();

export default db;
