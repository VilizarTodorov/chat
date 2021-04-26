import React from "react";
import { useRouter } from "next/router";
import ChatScreen from "../../components/ChatScreen";
import WithSidebar from "../../components/WithSidebar";

const Chat = (props) => {
  const router = useRouter();

  console.log(router.query);

  return (
    <WithSidebar>
      <ChatScreen></ChatScreen>
    </WithSidebar>
  );
};

export default Chat;
