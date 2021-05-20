import { Button } from "@material-ui/core";
import React, { useState } from "react";
import useButtonStyles from "../styles/ButtonStyles";
import { Form, FormButton, FormContainer, FormInput, FormTitle } from "../components/Form";
import { auth } from "../firebase";
import { useUser } from "../UserContext";
import { signInWithGoogle } from "../firebase/functions";

const Login = (props) => {
  const classes = useButtonStyles();
  const context = useUser();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signInWithEmailAndPassword = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .catch((error) => context.setAlert({ open: true, severity: "error", title: "Error", message: error.message }));
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
        <Button
          type="button"
          className={classes.button}
          variant="contained"
          fullWidth
          onClick={(e) => signInWithGoogle(e, context)}
        >
          Sign in with Google
        </Button>
      </Form>
    </FormContainer>
  );
};

export default Login;
