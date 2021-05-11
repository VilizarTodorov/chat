import { makeStyles, Paper } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  root: {
    height: "100vh",
  },
});

const MainLayout = ({ children }) => {
  const classes = useStyles();
  return (
    <Paper square component="main" className={classes.root}>
      {children}
    </Paper>
  );
};

export default MainLayout;
