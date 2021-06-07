import { useEffect, useState } from "react";
import { db } from "../firebase";

const useMessages = (chatId) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const listener = db
      .collection("chats")
      .doc(chatId)
      .collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((querySnapshot) => {
        let msgs = [];
        querySnapshot.forEach((msg) => msgs.push({ ...msg.data(), id: msg.id }));
        setMessages(msgs);
      });

    return () => {
      listener();
    };
  }, [chatId]);

  return messages;
};

export default useMessages;
