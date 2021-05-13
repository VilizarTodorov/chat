import { Box, IconButton, makeStyles } from "@material-ui/core";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import SendIcon from "@material-ui/icons/Send";
import React, { useState } from "react";
import { db, firebase } from "../../firebase";

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
  },
});

const ChatScreenFooter = ({chatId,user}) => {
  const classes = useStyles();
  const [message, setMessage] = useState("");

  const sendMessage = () => {
    if (!message) {
      return;
    }
    db.collection("chats").doc(chatId).collection("messages").add({
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      message,
      user: user.userDbEntry.email,
      photo: user.userDbEntry.photo,
    });
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <footer className={classes.footer}>
      <Box>
        <IconButton>
          <InsertEmoticonIcon></InsertEmoticonIcon>
        </IconButton>
        <IconButton>
          <AttachFileIcon></AttachFileIcon>
        </IconButton>
      </Box>
      <input
        onKeyDown={onKeyDown}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className={classes.messageInput}
      ></input>
      <IconButton onClick={sendMessage}>
        <SendIcon></SendIcon>
      </IconButton>
    </footer>
  );
};

export default ChatScreenFooter;
