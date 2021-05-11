import { Container, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  root: {
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

const FormContainer = ({ children }) => {
  const classes = useStyles();
  return <Container className={classes.root}>{children}</Container>;
};

export default FormContainer;
