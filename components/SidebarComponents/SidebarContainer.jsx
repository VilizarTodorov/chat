import { Container, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  root: {
    padding: 0,
    margin: 0,
    flexBasis: "35%",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    borderRight: "1px solid whitesmoke",
    backgroundColor: "#131c21",
  },
});

const SidebarContainer = ({ children }) => {
  const classes = useStyles();
  return <Container className={classes.root}>{children}</Container>;
};

export default SidebarContainer;
