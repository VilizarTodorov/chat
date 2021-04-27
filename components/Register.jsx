import { Button, TextField, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { auth, db } from "../firebase";
import { useRouter } from "next/router";

const Register = (props) => {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const router = useRouter();

  const register = async (e) => {
    e.preventDefault();
    let user = null;

    try {
      const result = await auth.createUserWithEmailAndPassword(email, password);
      await result.user.updateProfile({ displayName });
      user = result.user;

      await db.collection("users").doc(user.email).set({
        email: user.email,
        photo: user.photoURL,
        displayName: user.displayName,
      });

      await db.collection("contacts").doc(user.email).set({
        contacts: [],
      });

      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={register}>
      <Typography variant="h2"></Typography>
      <TextField
        margin="normal"
        id="displayName"
        name="displayName"
        type="text"
        label="Display Name"
        value={displayName}
        onChange={(e) => setDisplayName(e.target.value)}
        fullWidth
        autoFocus
      ></TextField>

      <TextField
        margin="normal"
        id="email"
        name="email"
        type="email"
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        fullWidth
      ></TextField>

      <TextField
        margin="normal"
        id="password"
        name="password"
        type="password"
        label="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        fullWidth
      ></TextField>

      <TextField
        margin="normal"
        id="repeatPassword"
        name="repeatPassword"
        type="password"
        label="Repeat Password"
        value={repeatPassword}
        onChange={(e) => setRepeatPassword(e.target.value)}
        fullWidth
      ></TextField>

      <Button type="submit">Register</Button>
    </form>
  );
};

export default Register;
