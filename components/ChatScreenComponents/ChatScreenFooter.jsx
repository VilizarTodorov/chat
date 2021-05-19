import { Box, IconButton, makeStyles, TextareaAutosize } from "@material-ui/core";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import SendIcon from "@material-ui/icons/Send";
import React, { useState } from "react";
import { sendMessage } from "../../firebase/functions";

const useStyles = makeStyles({
  footer: {
    padding: "5px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  messageInput: {
    margin: "12px",
    flex: 1,
    borderRadius: "20px",
    outline: "none",
    border: "none",
    padding: "5px",
    paddingLeft: "15px",
    resize: "none",
  },
});

const ChatScreenFooter = ({ chatId, user }) => {
  const classes = useStyles();
  const [message, setMessage] = useState("");

  const onKeyDown = (e) => {
    const keyCode = e.which || e.keyCode;

    // 13 represents the Enter key
    if (keyCode === 13 && !e.shiftKey) {
      // Don't generate a new line
      e.preventDefault();

      // Do something else such as send the message to back-end
      // ...
      sendMessage(message, chatId, user);
    }
  };

  return (
    <footer className={classes.footer}>
      <Box>
        <IconButton>
          <InsertEmoticonIcon></InsertEmoticonIcon>
        </IconButton>
        <IconButton component="label">
          <AttachFileIcon></AttachFileIcon>
          <input type="file" hidden />
        </IconButton>
      </Box>
      <TextareaAutosize
        rowsMax={5}
        onKeyDown={onKeyDown}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className={classes.messageInput}
      ></TextareaAutosize>
      <IconButton onClick={() => sendMessage(message, chatId, user)}>
        <SendIcon></SendIcon>
      </IconButton>
    </footer>
  );
};

export default ChatScreenFooter;
