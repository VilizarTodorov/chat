import { useRouter } from "next/router";
import React from "react";
import { auth, db } from "../firebase";
import useDebounce from "../hooks/useDebounce";
import useForm from "../hooks/useForm";
import { useUser } from "../UserContext/index";
import emailValidations from "../validations/emailValidations";
import passwordValidations from "../validations/passwordValidations";
import { Form, FormButton, FormContainer, FormInput, FormTitle } from "./Form";
import LoginLink from "./LoginComponents/LoginLink";

const Register = (props) => {
  const validatePassword = useDebounce(passwordValidations);
  const validateEmail = useDebounce(emailValidations);
  const context = useUser();
  const router = useRouter();
  const [values, onChange] = useForm({
    displayName: "",
    email: "",
    password: "",
    repeatPassword: "",
  });

  const [errors, _, setValue] = useForm({ displayName: "", email: "", password: "", repeatPassword: "" });

  const onChangeWithValidation = (validationFn) => {
    return (e) => {
      onChange(e);
      validationFn(e.target.value, setValue, e.target.name);
    };
  };

  const register = async (e) => {
    e.preventDefault();
    const { email, displayName, password } = values;

    if (
      errors.email.hasError ||
      errors.password.hasError ||
      errors.repeatPassword.hasError ||
      errors.displayName.hasError
    ) {
      return;
    }

    try {
      const result = await auth.createUserWithEmailAndPassword(email, password);

      context.setUser({
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
          onChange={onChangeWithValidation(validateEmail)}
          placeholder="Email"
          required={true}
          autoFocus={false}
          label="Email"
          hasError={errors.email.hasError}
          errorMessage={errors.email.message}
        ></FormInput>
        <FormInput
          id="password"
          name="password"
          type="password"
          value={values.password}
          onChange={onChangeWithValidation(validatePassword)}
          placeholder="Password"
          required={true}
          autoFocus={false}
          label="Password"
          hasError={errors.password.hasError}
          errorMessage={errors.password.message}
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
        <LoginLink></LoginLink>
      </Form>
    </FormContainer>
  );
};

export default Register;
