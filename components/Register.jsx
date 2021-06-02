import { useRouter } from "next/router";
import React, { useState } from "react";
import { auth, db } from "../firebase";
import { Form, FormButton, FormContainer, FormInput, FormTitle } from "./Form";
import { useUser } from "../UserContext/index";
import useForm from "../hooks/useForm";

const Register = (props) => {
  const user = useUser();
  const router = useRouter();
  const [values, onChange] = useForm({
    displayName: "",
    email: "",
    password: "",
    repeatPassword: "",
  });

  const register = async (e) => {
    e.preventDefault();
    const { email, displayName, password } = values;

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
          value={values.displayName}
          onChange={onChange}
          placeholder="Display Name"
          required={true}
          autoFocus={true}
          label="Display Name"
        ></FormInput>
        <FormInput
          id="email"
          name="email"
          type="email"
          value={values.email}
          onChange={onChange}
          placeholder="Email"
          required={true}
          autoFocus={false}
          label="Email"
        ></FormInput>
        <FormInput
          id="password"
          name="password"
          type="password"
          value={values.password}
          onChange={onChange}
          placeholder="Password"
          required={true}
          autoFocus={false}
          label="Password"
        ></FormInput>
        <FormInput
          id="repeatPassword"
          name="repeatPassword"
          type="password"
          value={values.repeatPassword}
          onChange={onChange}
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
