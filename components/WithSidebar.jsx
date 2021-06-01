import React from "react";
import { Container, makeStyles } from "@material-ui/core";
import Sidebar from "./Sidebar";

const useStyles = makeStyles({
  container: {
    height: "100vh",
    display: "flex",
    padding: 0,
    overflow: "hidden",
    backgroundColor: "#807272",
  },
});

const WithSidebar = ({ children }) => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Sidebar></Sidebar>
      {children}
    </Container>
  );
};

export default WithSidebar;
