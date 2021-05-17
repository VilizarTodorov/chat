import { Button } from "@material-ui/core";
import React, { useState } from "react";
import useButtonStyles from "../styles/ButtonStyles";
import { Form, FormButton, FormContainer, FormInput, FormTitle } from "../components/Form";
import { auth, db, googleAuthProvider } from "../firebase";
import { useUser } from "../UserContext";

const Login = (props) => {
  const classes = useButtonStyles();
  const User = useUser();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signInWithGoogle = async (e) => {
    e.preventDefault();
    let user = null;

    try {
      const result = await auth.signInWithPopup(googleAuthProvider);
      user = result.user;
      console.log(result);
      User.setUser({
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL,
        about: "",
      });
    } catch (err) {
      console.log(err.message);
      console.log("could not login with google for some reason");
      return;
    }

    const docRef = db.collection("users").doc(user.email);

    docRef.get().then(async (doc) => {
      if (!doc.exists) {
        console.log("doc does not exist");
        db.collection("users").doc(user.email).set({
          email: user.email,
          displayName: user.displayName,
          photoURL: user.photoURL,
          about: "Hi I am using Chat!",
        });

        db.collection("contacts").doc(user.email).set({
          contacts: [],
        });

        db.collection("userChats").doc(user.email).set({
          chats: [],
        });
      }
    });
  };

  const signInWithEmailAndPassword = (e) => {
    console.log("a");
    e.preventDefault();
    auth.signInWithEmailAndPassword(email, password).catch((err) => console.log(err));
  };

  return (
    <FormContainer>
      <Form onSubmit={signInWithEmailAndPassword}>
        <FormTitle>Login</FormTitle>
        <FormInput
          id="email"
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required={true}
          autoFocus={true}
          label="Email"
        ></FormInput>
        <FormInput
          id="password"
          name="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required={true}
          autoFocus={false}
          label="Password"
        ></FormInput>
        <FormButton>Login</FormButton>
        <Button type="button" className={classes.button} variant="contained" fullWidth onClick={signInWithGoogle}>
          Sign in with Google
        </Button>
      </Form>
    </FormContainer>
  );
};

export default Login;
