import { Container, IconButton, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";

const useStyles = makeStyles({
  header: {
    display: "flex",
    alignItems: "flex-end",
    height: "120px",
  },
  container: {
    padding: 0,
    display: "flex",
    alignItems: "center",
  },
  iconButton: {
    margin: "13px",
  },
});

const ContactsHeader = ({ close }) => {
  const classes = useStyles();
  return (
    <header className={classes.header}>
      <Container className={classes.container}>
        <IconButton className={classes.iconButton} onClick={close}>
          <KeyboardBackspaceIcon></KeyboardBackspaceIcon>
        </IconButton>
        <Typography variant="h5">Contacts</Typography>
      </Container>
    </header>
  );
};

export default ContactsHeader;
