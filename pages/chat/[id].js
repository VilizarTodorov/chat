import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import ChatScreen from "../../components/ChatScreen";
import WithSidebar from "../../components/WithSidebar";
import withAuthorization from "../../UserContext/withAuthorization";
import { db } from "../../firebase";

const Chat = (props) => {
  const router = useRouter();
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const listener = db
      .collection("chats")
      .doc(router.query.id)
      .collection("messages").orderBy('timestamp','desc')
      .onSnapshot((querySnapshot) => {
        let msgs = [];
        querySnapshot.forEach((msg) => msgs.push({ ...msg.data(), id: msg.id }));
        setMessages(msgs);
      });

    return () => {
      listener();
    };
  }, [router.query.id]);

  return (
    <WithSidebar>
      <ChatScreen chatId={router.query.id} messages={messages}></ChatScreen>
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
