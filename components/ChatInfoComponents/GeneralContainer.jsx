import { Container, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  container: {
    backgroundColor: "#0d1418",
    paddingTop: "5px",
    paddingBottom: "5px",
    marginBottom: "10px",
  },
});

const GeneralContainer = ({ children }) => {
  const classes = useStyles();
  return <Container className={classes.container}>{children}</Container>;
};

export default GeneralContainer;
