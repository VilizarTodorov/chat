import { Box, makeStyles } from "@material-ui/core";
import { useRouter } from "next/router";
import React, { useState } from "react";
import getUser from "../helpers/functions/getUser";
import { useUser } from "../UserContext";
import { useChat, useMessages, useChatLinks } from "../UserContext/hooks";
import ChatInfo from "./ChatInfo";
import ChatScreenContainer from "./ChatScreenComponents/ChatScreenContainer";
import ChatScreenFooter from "./ChatScreenComponents/ChatScreenFooter";
import ChatScreenHeader from "./ChatScreenComponents/ChatScreenHeader";
import Messages from "./ChatScreenComponents/Messages";

const useStyles = makeStyles({
  box: {
    position: "relative",
    // flexBasis: "60%",
    flex: 1,
    display: "flex",
  },
});

const ChatScreen = () => {
  const classes = useStyles();
  const context = useUser();
  const router = useRouter();
  const chat = useChat(router.query.id);
  const messages = useMessages(router.query.id);
  const links = useChatLinks(router.query.id);
  const recipient = getUser(chat.users, context.user.email);
  const [chatInfoOpen, setChatInfoOpen] = useState(false);

  console.log(links);

  return (
    <Box className={classes.box}>
      <ChatScreenContainer>
        <ChatScreenHeader
          openChatInfo={() => setChatInfoOpen(true)}
          recipient={recipient.email}
          photoURL={recipient.photoURL}
        ></ChatScreenHeader>
        <Messages messages={messages} userEmail={context.user.email} chatId={chat.id}></Messages>
        <ChatScreenFooter chatId={chat.id} user={context.user}></ChatScreenFooter>
      </ChatScreenContainer>
      <ChatInfo
        chatId={chat.id}
        user={context.user}
        recipient={recipient}
        isOpen={chatInfoOpen}
        close={() => setChatInfoOpen(false)}
        links={links}
      ></ChatInfo>
    </Box>
  );
};

export default ChatScreen;
