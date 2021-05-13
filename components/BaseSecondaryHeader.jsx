import { Container, IconButton, Typography } from "@material-ui/core";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import React from "react";
import useHeaderStyles from "../commonStyles/header";

const ContactsHeader = ({ close, title }) => {
  const classes = useHeaderStyles();
  return (
    <header className={classes.header}>
      <Container className={classes.container}>
        <IconButton className={classes.iconButton} onClick={close}>
          <KeyboardBackspaceIcon></KeyboardBackspaceIcon>
        </IconButton>
        <Typography className={classes.title} variant="h5">
          {title}
        </Typography>
      </Container>
    </header>
  );
};

export default ContactsHeader;
