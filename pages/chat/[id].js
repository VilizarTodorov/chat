import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import ChatScreen from "../../components/ChatScreen";
import WithSidebar from "../../components/WithSidebar";
import withAuthorization from "../../UserContext/withAuthorization";
import { db } from "../../firebase";
import { useMessages } from "../../UserContext/hooks";

const Chat = () => {
  const router = useRouter();
  const messages = useMessages(router.query.id);

  return (
    <WithSidebar>
      <ChatScreen chatId={router.query.id} messages={messages}></ChatScreen>
    </WithSidebar>
  );
};

const condition = (user) => {
  if (user) {
    return true;
  }
  return false;
};

export default withAuthorization(condition)(Chat);
