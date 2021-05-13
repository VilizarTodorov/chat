import { Container, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  root: {
    padding: 0,
    margin: 0,
    flexBasis: "40%",
    position: "relative",
    display: "flex",
    flexDirection: "column",
  },
});

const SidebarContainer = ({ children }) => {
  const classes = useStyles();
  return <Container className={classes.root}>{children}</Container>;
};

export default SidebarContainer;
