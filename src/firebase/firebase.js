import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyBDdvvuyErD-nJ0HmqzCousmnb4zu5HqGc",
  authDomain: "modo-831b9.firebaseapp.com",
  projectId: "modo-831b9",
  storageBucket: "modo-831b9.appspot.com",
  messagingSenderId: "81419224693",
  appId: "1:81419224693:web:d5b63cabbae2cc14ac9a3c",
  measurementId: "G-9EF7E8T014",
});

export { firebaseConfig as firebase };
