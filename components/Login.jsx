import { Box, Button, Container, Input, TextField, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { auth, db, googleAuthProvider } from "../firebase";
import { useUser } from "../UserContext";
import styles from "../styles/Login.module.css";

const Login = (props) => {
  const User = useUser();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signInWithGoogle = async () => {
    let user = null;

    try {
      const result = await auth.signInWithPopup(googleAuthProvider);
      user = result.user;
      User.setUserDbEntry({ email: user.email, photo: user.photoURL, displayName: user.displayName });
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
          photo: user.photoURL,
          displayName: user.displayName,
        });

        db.collection("contacts").doc(user.email).set({
          contacts: [],
        });
      }
    });
  };

  const signInWithEmailAndPassword = () => {
    auth.signInWithEmailAndPassword(email, password).catch((err) => console.log(err));
  };

  return (
    <Container component="main" className={styles.main}>
      <Container maxWidth="xs">
        <Typography color="inherit" variant="h4">
          Login
        </Typography>
        <Container className={`${styles.infoContainer} ${styles.inView}`}>
          <Box component="span">Email</Box>
          <Box className={styles.infoInputContainer}>
            <Input
              id="email"
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
              fullWidth
              autoFocus
              className={`${styles.infoInput} ${styles[`MuiInput-underline`]} ${styles.active}`}
            ></Input>
          </Box>
        </Container>
        <Container className={`${styles.infoContainer} ${styles.inView}`}>
          <Box component="span">Password</Box>
          <Box className={styles.infoInputContainer}>
            <Input
              id="password"
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              fullWidth
              required
              className={`${styles.infoInput} ${styles[`MuiInput-underline`]} ${styles.active}`}
            ></Input>
          </Box>
        </Container>
        <Button
          className={styles.button}
          fullWidth
          onClick={signInWithEmailAndPassword}
          variant="contained"
          type="submit"
        >
          Login
        </Button>
        <Button className={styles.button} fullWidth onClick={signInWithGoogle} variant="contained">
          Sign in with Google
        </Button>
      </Container>
    </Container>
  );
};

export default Login;
