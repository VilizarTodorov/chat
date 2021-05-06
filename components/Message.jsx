import { Box, Container } from "@material-ui/core";
import React from "react";
import styles from "../styles/Message.module.css";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import MessageOptionsMenu from "./MessageOptionsMenu";
import { db } from "../firebase";

const Message = ({ sender, message, timestamp, messageId, chatId }) => {
  const deleteMessage = () => {
    db.collection("chats")
      .doc(chatId)
      .collection("messages")
      .doc(messageId)
      .delete()
      .then(() => {
        console.log("Document successfully deleted!");
      })
      .catch((error) => {
        console.error("Error removing document: ", error);
      });
  };

  const editMessage = () => {
    console.log("edit", id);
  };
  return (
    <Container className={styles.messageContainer}>
      <div component="p" className={`${styles.message} ${sender ? styles.sender : styles.receiver}`}>
        <p className={styles.messageText}>{message}</p>
        <MessageOptionsMenu
          deleteMessage={deleteMessage}
          editMessage={editMessage}
          className={styles.messageOptionsIcon}
        ></MessageOptionsMenu>
      </div>
    </Container>
  );
};

export default Message;
