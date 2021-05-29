import React from "react";
import ChatInfoAbout from "./ChatInfoComponents/ChatInfoAbout";
import ChatInfoActions from "./ChatInfoComponents/ChatInfoActions";
import ChatInfoAvatar from "./ChatInfoComponents/ChatInfoAvatar";
import ChatInfoContainer from "./ChatInfoComponents/ChatInfoContainer";
import ChatInfoHeader from "./ChatInfoComponents/ChatInfoHeader";
import ChatInfoMediaLinksDocs from "./ChatInfoComponents/ChatInfoMediaLinksDocs";
import ChatInfoOptions from "./ChatInfoComponents/ChatInfoOptions";
import Container from "./ChatInfoComponents/Container";

const ChatInfo = ({ recipient, isOpen, close }) => {
  return (
    <ChatInfoContainer isOpen={isOpen}>
      <ChatInfoHeader close={close}></ChatInfoHeader>
      <Container>
        <ChatInfoAvatar
          displayName={recipient.displayName}
          email={recipient.email}
          photoURL={recipient.photoURL}
          isOpen={isOpen}
        ></ChatInfoAvatar>
        <ChatInfoMediaLinksDocs></ChatInfoMediaLinksDocs>
        <ChatInfoOptions></ChatInfoOptions>
        <ChatInfoAbout recipientAbout={recipient.about}></ChatInfoAbout>
        <ChatInfoActions></ChatInfoActions>
      </Container>
    </ChatInfoContainer>
  );
};

export default ChatInfo;
