import { Button } from "@material-ui/core";
import { auth, db, googleAuthProvider } from "../firebase";
import React, { useState } from "react";

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

    const docRef = db.collection("users").doc(user.email);

    docRef.get().then(async (doc) => {
      if (!doc.exists) {
        console.log("doc does not exist");
        db.collection("users").doc(user.email).set({
          email: user.email,
          photo: user.photoURL,
          displayName: user.displayName,
        });

        db.collection("contacts").doc(user.email).set({
          contacts: [],
        });
      }
    });
  };

  return (
    <div>
      <h2>login</h2>
      <form></form>
      <Button onClick={signInWithGoogle} variant="contained">
        Sign in with Google
      </Button>
    </div>
  );
};

export default Login;
