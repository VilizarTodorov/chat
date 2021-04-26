import { Button } from "@material-ui/core";
import { auth, db, googleAuthProvider } from "../firebase";
import React from "react";

const Login = (props) => {
  const signInWithGoogle = async () => {
    let user = null;

    try {
      const result = await auth.signInWithPopup(googleAuthProvider);
      user = result.user;
    } catch (err) {
      console.log(err.message);
      console.log("could not login with google for some reason");
    }

    const docRef = db.collection("users").doc(user.uid);

    await docRef.get().then(async (doc) => {
      if (doc.exists) {
        console.log("doc exists");
      } else {
        console.log("doc does not exist");
        await db.collection("users").doc(user.uid).set({
          email: user.email,
          photo: user.photoURL,
          friendsList: [],
        });

        await db.collection("contacts").doc(user.uid).set({
          contacts: [],
        });

        console.log("created");
      }
    });
  };

  return (
    <div>
      <h2>login</h2>
      <Button onClick={signInWithGoogle} variant="contained">
        Sign in with Google
      </Button>
    </div>
  );
};

export default Login;
