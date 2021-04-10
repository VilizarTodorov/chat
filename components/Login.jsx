import { Button } from "@material-ui/core";
import { auth, googleAuthProvider } from "../firebase";
import React from "react";

const Login = (props) => {
  const signInWithGoogle = () => {
    auth
      .signInWithPopup(googleAuthProvider)
      .then((x) => console.log(x))
      .catch((err) => console.log(err));
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
