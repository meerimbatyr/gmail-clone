import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyChVo6g6bu-gD61xL1EoEIR8WzcQYSmPWw",
  authDomain: "clone-b65ba.firebaseapp.com",
  projectId: "clone-b65ba",
  storageBucket: "clone-b65ba.appspot.com",
  messagingSenderId: "83108983208",
  appId: "1:83108983208:web:70cae53ec15ce7190ded9d",
  measurementId: "G-RKXKRG216B",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
