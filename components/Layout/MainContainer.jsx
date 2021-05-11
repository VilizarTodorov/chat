import { makeStyles, Paper } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  root: {
    height: "100vh",
  },
});

const MainContainer = ({ children }) => {
  const classes = useStyles();
  return (
    <Paper color="default" square component="main" className={classes.root}>
      {children}
    </Paper>
  );
};

export default MainContainer;
