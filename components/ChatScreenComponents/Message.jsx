import { Box, Container, IconButton, makeStyles, TextareaAutosize, Typography } from "@material-ui/core";
import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";
import React, { Fragment, useState } from "react";
import { deleteMessage, editMessage } from "../../firebase/functions";
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

const Message = ({ isSender, message, messageId, chatId }) => {
  const classes = useStyles();
  const [isEditing, setIsEditing] = useState(false);
  const [newMessage, setNewMessage] = useState(message);

  return (
    <Container>
      <Box className={`${classes.message} ${isSender ? classes.sender : classes.receiver}`}>
        {!isEditing ? (
          <Typography>{message}</Typography>
        ) : (
          <Fragment>
            <TextareaAutosize value={newMessage} onChange={(e) => setNewMessage(e.target.value)}></TextareaAutosize>
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
            setIsEditing={setIsEditing}
            deleteMessage={() => deleteMessage(chatId, messageId)}
            className={classes.messageOptions}
          ></MessageOptionsMenu>
        )}
      </Box>
    </Container>
  );
};

export default Message;
