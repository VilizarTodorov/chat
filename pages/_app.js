import firebase from "firebase";
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import Loading from "../components/Loading";
import Login from '../components/Login';
import "../components/test.css";
import { DB_COLLECTION_USERS } from "../constants/db-collections";
import { auth, db } from "../firebase";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    if (user) {
      db.collection(DB_COLLECTION_USERS).doc(user.uid).set({
        email: user.email,
        lastSeen: firebase.firestore.FieldValue.serverTimestamp(),
        photoUrl: user.photoURL,
      });
      return;
    }
  }, [user]);

  if (loading) {
    return <Loading></Loading>;
  }
  if (error) {
    console.log(error);
    return <div>something went wrong </div>;
  }
  if (!user) {
    return <Login></Login>
  }

  return <Component {...pageProps} />;
}

export default MyApp;
