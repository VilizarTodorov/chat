import { Box, Container, IconButton, makeStyles, TextareaAutosize, Typography } from "@material-ui/core";
import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";
import React, { Fragment, useState } from "react";
import { db } from "../../firebase";
import MessageOptionsMenu from "./MessageOptionsMenu";

const useStyles = makeStyles({
  message: {
    position: "relative",
    padding: "10px",
    width: "fit-content",
    borderRadius: "8px",
    minWidth: "30px",
    maxWidth: "300px",
    wordWrap: "break-word",
    marginBlockStart: "1em",
    marginBlockEnd: "1em",
    marginInlineStart: "0px",
    marginInlineEnd: "0px",

    "&:hover $messageOptions": {
      width: "30px",
      padding: "12px",
    },
  },
  sender: {
    marginLeft: "auto",
    backgroundColor: "#104a19",
  },
  receiver: {
    backgroundColor: "#103b4a",
  },
  messageOptions: {
    padding: 0,
    width: 0,
    height: "30px",
    position: "absolute",
    right: 0,
    top: 0,
    backgroundColor: "#dcf8c6",
    borderRadius: "8px",
    transition: "all 0.2s ease-in-out",
    overflow: "hidden",
  },
});

const Message = ({ sender, message, messageId, chatId }) => {
  const classes = useStyles();
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
    <Container>
      <Box className={`${classes.message} ${sender ? classes.sender : classes.receiver}`}>
        {!isEditing ? (
          <Typography>{message}</Typography>
        ) : (
          <Fragment>
            <TextareaAutosize
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
            ></TextareaAutosize>
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
          className={classes.messageOptions}
        ></MessageOptionsMenu>
      </Box>
    </Container>
  );
};

export default Message;
