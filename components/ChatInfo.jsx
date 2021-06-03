import React, { useState } from "react";
import ChatInfoAbout from "./ChatInfoComponents/ChatInfoAbout";
import ChatInfoActions from "./ChatInfoComponents/ChatInfoActions";
import ChatInfoAvatar from "./ChatInfoComponents/ChatInfoAvatar";
import ChatInfoContainer from "./ChatInfoComponents/ChatInfoContainer";
import ChatInfoHeader from "./ChatInfoComponents/ChatInfoHeader";
import ChatInfoMediaLinksDocs from "./ChatInfoComponents/ChatInfoMediaLinksDocs";
import ChatInfoOptions from "./ChatInfoComponents/ChatInfoOptions";
import Container from "./ChatInfoComponents/Container";
import LinksMediaDocs from "./ChatInfoComponents/LinkMediaDocs";

const ChatInfo = ({ chatId, user, recipient, isOpen, close, links }) => {
  const [isMediaLinksDocsOpen, setIsMediaLinksDocsOpen] = useState(false);

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
        <ChatInfoMediaLinksDocs open={() => setIsMediaLinksDocsOpen(true)}></ChatInfoMediaLinksDocs>
        <ChatInfoOptions></ChatInfoOptions>
        <ChatInfoAbout recipientAbout={recipient.about}></ChatInfoAbout>
        <ChatInfoActions chatId={chatId} recipientEmail={recipient.email} userEmail={user.email}></ChatInfoActions>
      </Container>
      <LinksMediaDocs
        links={links}
        isOpen={isMediaLinksDocsOpen}
        close={() => setIsMediaLinksDocsOpen(false)}
      ></LinksMediaDocs>
    </ChatInfoContainer>
  );
};

export default ChatInfo;
