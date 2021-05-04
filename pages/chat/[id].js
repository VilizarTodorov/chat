import React from "react";
import { useRouter } from "next/router";
import ChatScreen from "../../components/ChatScreen";
import WithSidebar from "../../components/WithSidebar";
import withAuthorization from "../../UserContext/withAuthorization";

const Chat = (props) => {
  const router = useRouter();

  console.log(router.query);

  return (
    <WithSidebar>
      <ChatScreen></ChatScreen>
    </WithSidebar>
  );
};

const condition = (user) => {
  if (user.userDbEntry) {
    return true;
  }
  return false;
};

export default withAuthorization(condition)(Chat);
