import { useEffect, useState } from "react";
import { db } from "../firebase";

const useChats = (userChats) => {
  const [chats, setChats] = useState([]);

  useEffect(() => {
    const chatPromises = [];
    userChats.forEach((chat) => {
      const promise = db
        .collection("chats")
        .doc(chat.id)
        .get()
        .then((doc) => {
          return { id: doc.id, ...doc.data() };
        });
      chatPromises.push(promise);
    });
    Promise.all(chatPromises).then((chats) => setChats(chats));
  }, [userChats]);

  return chats;
};

export default useChats;
