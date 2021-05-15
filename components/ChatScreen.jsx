import React from "react";
import { useUser } from "../UserContext";
import ChatScreenContainer from "./ChatScreenComponents/ChatScreenContainer";
import ChatScreenFooter from "./ChatScreenComponents/ChatScreenFooter";
import ChatScreenHeader from "./ChatScreenComponents/ChatScreenHeader";
import Messages from "./ChatScreenComponents/Messages";

const ChatScreen = (props) => {
  const user = useUser();

  return (
    <ChatScreenContainer>
      <ChatScreenHeader></ChatScreenHeader>
      <Messages messages={props.messages} userEmail={user.user.email} chatId={props.chatId}></Messages>
      <ChatScreenFooter chatId={props.chatId} user={user}></ChatScreenFooter>
    </ChatScreenContainer>
  );
};

export default ChatScreen;
