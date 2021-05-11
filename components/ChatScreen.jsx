import Avatar from "@material-ui/core/Avatar";
import React, { useEffect, useRef, useState } from "react";
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
import Message from "./Message";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

const ChatScreen = (props) => {
  const user = useUser();
  const [message, setMessage] = useState("");
  const msgContainerRef = useRef(null);
  const [scrollDownButtonVisible, setScrollDownButtonVisible] = useState(false);

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

  const updateScroll = () => {
    msgContainerRef.current.scrollTop = msgContainerRef.current.scrollHeight;
    setScrollDownButtonVisible(false);
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  const onScroll = () => {
    if (msgContainerRef.current.scrollTop > -130) {
      setScrollDownButtonVisible(false);
      return;
    }

    if (scrollDownButtonVisible) {
      return;
    }

    if (msgContainerRef.current.scrollTop <= -130) {
      setScrollDownButtonVisible(true);
      return;
    }
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
      <Container onScroll={onScroll} ref={msgContainerRef} className={styles.messagesContainer}>
        {props.messages.map((msg) => {
          const isSender = msg.user === user.userDbEntry.email;
          return (
            <Message
              key={msg.id}
              sender={isSender}
              message={msg.message}
              timestamp={msg.timestamp}
              chatId={props.chatId}
              messageId={msg.id}
            ></Message>
          );
        })}
        <div className={styles.endOfMessage}></div>
        <IconButton
          className={`${styles.scrollDownButton} ${scrollDownButtonVisible ? styles.visible : ""}`}
          onClick={updateScroll}
        >
          <KeyboardArrowDownIcon></KeyboardArrowDownIcon>
        </IconButton>
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
        <input
          onKeyDown={onKeyDown}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={styles.messageInput}
        ></input>
        <IconButton onClick={sendMessage}>
          <SendIcon></SendIcon>
        </IconButton>
      </Container>
    </div>
  );
};

export default ChatScreen;
