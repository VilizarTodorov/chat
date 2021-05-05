import { Container } from "@material-ui/core";
import React from "react";
import styles from "../styles/Message.module.css";

const Message = ({ sender, message }) => {
  return (
    <Container>
      <p className={`${styles.message} ${sender ? styles.sender : styles.receiver}`}>{message}</p>
    </Container>
  );
};

export default Message;
