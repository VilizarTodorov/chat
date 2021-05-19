import React from "react";
import { useUser } from "../UserContext";
import ChatScreenContainer from "./ChatScreenComponents/ChatScreenContainer";
import ChatScreenFooter from "./ChatScreenComponents/ChatScreenFooter";
import ChatScreenHeader from "./ChatScreenComponents/ChatScreenHeader";
import Messages from "./ChatScreenComponents/Messages";

const ChatScreen = ({ messages, chatId }) => {
  const context = useUser();

  return (
    <ChatScreenContainer>
      <ChatScreenHeader></ChatScreenHeader>
      <Messages messages={messages} userEmail={context.user.email} chatId={chatId}></Messages>
      <ChatScreenFooter chatId={chatId} user={context.user}></ChatScreenFooter>
    </ChatScreenContainer>
  );
};

export default ChatScreen;
