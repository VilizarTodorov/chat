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
import { Box, makeStyles } from "@material-ui/core";

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
  const messages = useMessages(router.query.id);
  const chat = useChat(router.query.id);
  const recipient = getUser(chat.users, context.user.email);
  const [chatInfoOpen, setChatInfoOpen] = useState(false);

  return (
    <Box className={classes.box}>
      {/* <Fragment> */}
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
      ></ChatInfo>
      {/* </Fragment> */}
    </Box>
  );
};

export default ChatScreen;
