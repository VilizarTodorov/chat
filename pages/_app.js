import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import Loading from "../components/Loading";
import "../components/test.css";
import { DB_COLLECTION_USERS } from "../constants";
import { auth, db } from "../firebase";
import "../styles/globals.css";
import firebase from "firebase";

function MyApp({ Component, pageProps }) {
  const [user, loading, error] = useAuthState(auth);
  console.log(user);

  useEffect(() => {
    if (user) {
      db.collection(DB_COLLECTION_USERS).doc(user.uid).set({
        email: user.email,
        lastSeen: firebase.firestore.FieldValue.serverTimestamp(),
        photoUrl: user.photoURL,
      });
    }
  });

  if (loading) {
    return <Loading></Loading>;
  }
  if (error) {
    console.log(error);
    return <div>something went wrong </div>;
  }

  return <Component {...pageProps} />;
}

export default MyApp;
