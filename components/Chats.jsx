import List from "@material-ui/core/List";
import React from "react";
import Chat from "./Chat";
import styles from "../styles/Chats.module.css";

const Chats = (props) => {
  return (
    <List className={styles.list}>
      {props.chats.map((chat) => (
        <Chat key={chat} recipient={`test${chat}`}></Chat>
      ))}
    </List>
  );
};

export default Chats;
