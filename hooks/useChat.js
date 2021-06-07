import { useEffect, useState } from "react";
import { db } from "../firebase";

const useChat = (chatId) => {
  const [chat, setChat] = useState({});

  useEffect(() => {
    const listener = db
      .collection("chats")
      .doc(chatId)
      .onSnapshot((doc) => setChat({ id: doc.id, ...doc.data() }));

    return () => {
      listener;
    };
  }, [chatId]);

  return chat;
};

export default useChat;
