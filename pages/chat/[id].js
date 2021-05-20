import React from "react";
import ChatScreen from "../../components/ChatScreen";
import WithSidebar from "../../components/WithSidebar";
import withAuthorization from "../../UserContext/withAuthorization";

const Chat = () => {
  return (
    <WithSidebar>
      <ChatScreen></ChatScreen>
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
