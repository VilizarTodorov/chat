import { Container, IconButton, makeStyles, Typography } from "@material-ui/core";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import React from "react";

const useStyles = makeStyles({
  header: {
    display: "flex",
    alignItems: "flex-end",
    height: "120px",
    backgroundColor: "#323739",
  },
  container: {
    padding: 0,
    display: "flex",
    alignItems: "center",
  },
  iconButton: {
    margin: "13px",
  },
  title: {
    textTransform: "capitalize",
  },
});

const BaseSecondaryHeader = ({ close, title }) => {
  const classes = useStyles();
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

export default BaseSecondaryHeader;
