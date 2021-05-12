import { Box, Button, Container, Input, Typography } from "@material-ui/core";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { auth, db } from "../firebase";
import styles from "../styles/Login.module.css";
import { Form, FormButton, FormContainer, FormInput, FormTitle } from "./Form";

const Register = (props) => {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const router = useRouter();

  const register = async (e) => {
    try {
      await db.collection("users").doc(email).set({
        email: email,
        photo: null,
        displayName: displayName,
      });

      await db.collection("contacts").doc(email).set({
        contacts: [],
      });

      await db.collection("userChats").doc(email).set({
        chats: [],
      });

      const result = await auth.createUserWithEmailAndPassword(email, password);
      await result.user.updateProfile({ displayName });

      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <FormContainer>
      <Form onSubmit={register}>
        <FormTitle>Register</FormTitle>
        <FormInput
          id="displayName"
          name="displayName"
          type="text"
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
          placeholder="Display Name"
          required={true}
          autoFocus={true}
          label="Display Name"
        ></FormInput>
        <FormInput
          id="email"
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required={true}
          autoFocus={false}
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
        <FormInput
          id="repeatPassword"
          name="repeatPassword"
          type="password"
          value={repeatPassword}
          onChange={(e) => setRepeatPassword(e.target.value)}
          placeholder="Repeat Password"
          required={true}
          autoFocus={false}
          label="Repeat Password"
        ></FormInput>
        <FormButton>Register</FormButton>
      </Form>
    </FormContainer>
    
  );
};

export default Register;
