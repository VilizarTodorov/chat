import React from "react";
import ChatInfoAvatar from "./ChatInfoComponents/ChatInfoAvatar";
import ChatInfoContainer from "./ChatInfoComponents/ChatInfoContainer";
import ChatInfoHeader from "./ChatInfoComponents/ChatInfoHeader";

const ChatInfo = ({ recipient, isOpen, close }) => {
  return (
    <ChatInfoContainer isOpen={isOpen}>
      <ChatInfoHeader close={close}></ChatInfoHeader>
      <ChatInfoAvatar email={recipient.email} photoURL={recipient.photoURL} isOpen={isOpen}></ChatInfoAvatar>
    </ChatInfoContainer>
  );
};

export default ChatInfo;
