import Avatar from "@material-ui/core/Avatar";
import React, { useState } from "react";
import styles from "../styles/ChatScreen.module.css";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import IconButton from "@material-ui/core/IconButton";
import AttachFile from "@material-ui/icons/AttachFile";
import Search from "@material-ui/icons/Search";
import { Container } from "@material-ui/core";
import { InsertEmoticon } from "@material-ui/icons";
import SendIcon from "@material-ui/icons/Send";
import ListOfPeople from "./List";
import { useUser } from "../UserContext";
import { db, firebase } from "../firebase";

const ChatScreen = (props) => {
  const user = useUser();
  const [message, setMessage] = useState("");

  const sendMessage = () => {
    if (!message) {
      return;
    }
    db.collection("chats").doc(props.chatId).collection("messages").add({
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      message,
      user: user.userDbEntry.email,
      photo: user.userDbEntry.photo,
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.user}>
          <Avatar></Avatar>
          <div className={styles.userInformation}>
            <h3 className={styles.info}>recipient email</h3>
            <p className={styles.info}>last seen:</p>
          </div>
        </div>
        <div className={styles.headerIcons}>
          <IconButton>
            <Search></Search>
          </IconButton>
          <IconButton>
            <MoreVertIcon></MoreVertIcon>
          </IconButton>
        </div>
      </div>
      <Container className={styles.messagesContainer}>
        <ListOfPeople></ListOfPeople>
        <div className={styles.endOfMessage}></div>
      </Container>
      <Container className={styles.inputContainer}>
        <div>
          <IconButton>
            <InsertEmoticon></InsertEmoticon>
          </IconButton>
          <IconButton>
            <AttachFile></AttachFile>
          </IconButton>
        </div>
        <input value={message} onChange={(e) => setMessage(e.target.value)} className={styles.messageInput}></input>
        <IconButton onClick={sendMessage}>
          <SendIcon></SendIcon>
        </IconButton>
      </Container>
    </div>
  );
};

export default ChatScreen;
