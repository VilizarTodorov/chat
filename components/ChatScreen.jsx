import React, { Fragment, useState } from "react";
import { useUser } from "../UserContext";
import ChatScreenContainer from "./ChatScreenComponents/ChatScreenContainer";
import ChatScreenFooter from "./ChatScreenComponents/ChatScreenFooter";
import ChatScreenHeader from "./ChatScreenComponents/ChatScreenHeader";
import Messages from "./ChatScreenComponents/Messages";
import getUser from "../helpers/functions/getUser";
import { useRouter } from "next/router";
import { useChat, useMessages } from "../UserContext/hooks";
import ChatInfo from "./ChatInfo";

const ChatScreen = () => {
  const context = useUser();
  const router = useRouter();
  const messages = useMessages(router.query.id);
  const chat = useChat(router.query.id);
  const recipient = getUser(chat.users, context.user.email);
  const [chatInfoOpen, setChatInfoOpen] = useState(false);

  return (
    <Fragment>
      <ChatScreenContainer>
        <ChatScreenHeader
          openChatInfo={() => setChatInfoOpen(true)}
          recipient={recipient.email}
          photoURL={recipient.photoURL}
        ></ChatScreenHeader>
        <Messages messages={messages} userEmail={context.user.email} chatId={chat.id}></Messages>
        <ChatScreenFooter chatId={chat.id} user={context.user}></ChatScreenFooter>
      </ChatScreenContainer>
      <ChatInfo recipient={recipient} isOpen={chatInfoOpen} close={() => setChatInfoOpen(false)}></ChatInfo>
    </Fragment>
  );
};

export default ChatScreen;
