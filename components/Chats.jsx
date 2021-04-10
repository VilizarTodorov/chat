import List from "@material-ui/core/List";
import React from "react";
import Chat from "./Chat";

const Chats = (props) => {
  return (
    <List>
      {props.chats.map((chat) => (
        <Chat key={chat} recipient={`test${chat}`}></Chat>
      ))}
    </List>
  );
};

export default Chats;
