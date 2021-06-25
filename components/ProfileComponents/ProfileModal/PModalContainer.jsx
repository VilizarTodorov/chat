import { makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    height: "500px",
    width: "500px",
    margin: "auto",
  },
});

const PModalContainer = ({ children }) => {
  const classes = useStyles();
  return <div className={classes.container}>{children}</div>;
};

export default PModalContainer;
