import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyDE_4C5pfTqmOCCztS-Z19EUzfEHfLokho",
  authDomain: "chat-74d83.firebaseapp.com",
  projectId: "chat-74d83",
  storageBucket: "chat-74d83.appspot.com",
  messagingSenderId: "959955551158",
  appId: "1:959955551158:web:659d5d122f3e8c71933717",
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore();
const auth = app.auth();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, auth, googleAuthProvider };
