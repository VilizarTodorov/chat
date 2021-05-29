import React from "react";
import ChatInfoAvatar from "./ChatInfoComponents/ChatInfoAvatar";
import ChatInfoContainer from "./ChatInfoComponents/ChatInfoContainer";
import ChatInfoHeader from "./ChatInfoComponents/ChatInfoHeader";
import ChatInfoMediaLinksDocs from "./ChatInfoComponents/ChatInfoMediaLinksDocs";
import ChatInfoOptions from "./ChatInfoComponents/ChatInfoOptions";

const ChatInfo = ({ recipient, isOpen, close }) => {
  return (
    <ChatInfoContainer isOpen={isOpen}>
      <ChatInfoHeader close={close}></ChatInfoHeader>
      <ChatInfoAvatar displayName={recipient.displayName} email={recipient.email} photoURL={recipient.photoURL} isOpen={isOpen}></ChatInfoAvatar>
      <ChatInfoMediaLinksDocs></ChatInfoMediaLinksDocs>
      <ChatInfoOptions></ChatInfoOptions>
    </ChatInfoContainer>
  );
};

export default ChatInfo;
