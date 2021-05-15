import { useRouter } from "next/router";
import React, { useState } from "react";
import { auth, db } from "../firebase";
import { Form, FormButton, FormContainer, FormInput, FormTitle } from "./Form";
import { useUser } from "../UserContext/index";

const Register = (props) => {
  const user = useUser();
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const router = useRouter();

  const register = async (e) => {
    e.preventDefault();
    try {
      const result = await auth.createUserWithEmailAndPassword(email, password);

      user.setUser({
        uid: result.user.uid,
        email,
        displayName,
        photoURL: null,
        about: "Hi I am using Chat!",
      });

      result.user.updateProfile({ displayName });

      db.collection("users").doc(email).set({
        email: email,
        displayName: displayName,
        photoURL: null,
        about: "Hi I am using Chat!",
      });

      db.collection("contacts").doc(email).set({
        contacts: [],
      });

      db.collection("userChats").doc(email).set({
        chats: [],
      });

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
