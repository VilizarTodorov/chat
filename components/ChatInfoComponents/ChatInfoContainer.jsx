import { Container, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  container: {
    padding: 0,
    width: "100%",
    maxWidth: 0,
    transition: "all 0.35s",
  },
  active: {
    maxWidth: "350px",
    borderLeft: "1px solid whitesmoke",
  },
});

const ChatInfoContainer = ({ isOpen, children }) => {
  const classes = useStyles();

  return <Container className={`${classes.container} ${isOpen && classes.active}`}>{children}</Container>;
};

export default ChatInfoContainer;
