import React from "react";
import ChatInfoContainer from "./ChatInfoComponents/ChatInfoContainer";
import ChatInfoHeader from "./ChatInfoComponents/ChatInfoHeader";

const ChatInfo = ({ isOpen, close }) => {
  return (
    <ChatInfoContainer isOpen={isOpen}>
      <ChatInfoHeader close={close}></ChatInfoHeader>
    </ChatInfoContainer>
  );
};

export default ChatInfo;
