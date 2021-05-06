import { Box, Container, IconButton } from "@material-ui/core";
import React, { Fragment, useState } from "react";
import styles from "../styles/Message.module.css";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import MessageOptionsMenu from "./MessageOptionsMenu";
import { db } from "../firebase";
import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";

const Message = ({ sender, message, timestamp, messageId, chatId }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newMessage, setNewMessage] = useState(message);

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
    db.collection("chats")
      .doc(chatId)
      .collection("messages")
      .doc(messageId)
      .update({ message: newMessage })
      .then(() => {
        console.log("Document successfully updated!");
      })
      .then(() => setIsEditing(false))
      .catch((error) => {
        // The document probably doesn't exist.
        console.error("Error updating document: ", error);
      });
  };
  return (
    <Container className={styles.messageContainer}>
      <div component="p" className={`${styles.message} ${sender ? styles.sender : styles.receiver}`}>
        {!isEditing ? (
          <p className={styles.messageText}>{message}</p>
        ) : (
          <Fragment>
            <textarea
              className={styles.messageText}
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
            ></textarea>
            <IconButton onClick={editMessage}>
              <CheckIcon></CheckIcon>
            </IconButton>
            <IconButton onClick={() => setIsEditing(false)}>
              <CloseIcon></CloseIcon>
            </IconButton>
          </Fragment>
        )}
        <MessageOptionsMenu
          setIsEditing={setIsEditing}
          deleteMessage={deleteMessage}
          className={styles.messageOptionsIcon}
        ></MessageOptionsMenu>
      </div>
    </Container>
  );
};

export default Message;
