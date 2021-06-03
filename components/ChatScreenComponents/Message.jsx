import { Box, Container, IconButton, makeStyles, TextareaAutosize, Typography } from "@material-ui/core";
import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";
import React, { Fragment, useState } from "react";
import { deleteMessage, editMessage } from "../../firebase/functions";
import MessageOptionsMenu from "./MessageOptionsMenu";

const useStyles = makeStyles({
  container: {
    padding: 0,
  },
  message: {
    display: "flex",
    alignItems: "center",
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
    wordBreak:"break-all"
  },
  messageHover: {
    "&:hover $messageOptions": {
      width: "30px",
      padding: "12px",
      opacity: 1,
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
    opacity: 0,
    height: "30px",
    position: "absolute",
    right: 0,
    top: 0,
    backgroundColor: "#dcf8c6",
    borderRadius: "8px",
    transition: "all 0.2s ease-in-out",
    overflow: "hidden",
  },
  textarea: {
    resize: "none",
    padding: "10px",
    outline: "none",
    border: "none",
    borderRadius: "8px",
  },
  menuOpen: {
    width: "30px",
    padding: "12px",
    opacity: 1,
  },
});

const Message = ({ isSender, message, messageId, chatId }) => {
  const classes = useStyles();
  const [isEditing, setIsEditing] = useState(false);
  const [newMessage, setNewMessage] = useState(message);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Container className={classes.container}>
      <Box
        className={`${classes.message} ${isSender ? classes.sender : classes.receiver} ${
          !isEditing && classes.messageHover
        }`}
      >
        {!isEditing ? (
          <Typography>{message}</Typography>
        ) : (
          <Fragment>
            <TextareaAutosize
              className={classes.textarea}
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
            ></TextareaAutosize>
            <IconButton onClick={() => editMessage(chatId, messageId, newMessage, () => setIsEditing(false))}>
              <CheckIcon></CheckIcon>
            </IconButton>
            <IconButton onClick={() => setIsEditing(false)}>
              <CloseIcon></CloseIcon>
            </IconButton>
          </Fragment>
        )}
        {isSender && (
          <MessageOptionsMenu
            setIsMenuOpen={setIsMenuOpen}
            isMenuOpen={isMenuOpen}
            setIsEditing={setIsEditing}
            deleteMessage={() => deleteMessage(chatId, messageId)}
            classes={{ messageOptions: classes.messageOptions, menuOpen: classes.menuOpen }}
          ></MessageOptionsMenu>
        )}
      </Box>
    </Container>
  );
};

export default Message;
