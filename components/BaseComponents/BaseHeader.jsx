import { AppBar, makeStyles, Toolbar } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  root: {
    zIndex: 10,
    boxShadow: "none",
    backgroundColor: "#2a2f32",
  },
  toolbar: {
    height: "80px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

const BaseHeader = ({ children }) => {
  const classes = useStyles();
  return (
    <AppBar position="sticky" className={classes.root}>
      <Toolbar className={classes.toolbar}>{children}</Toolbar>
    </AppBar>
  );
};

export default BaseHeader;
