import React from "react";
import { Container } from "@material-ui/core";
import Sidebar from "./Sidebar";
import styles from "../styles/Home.module.css";

const WithSidebar = ({ children }) => {
  return (
    <Container className={styles.container}>
      <Sidebar></Sidebar>
      {children}
    </Container>
  );
};

export default WithSidebar;
