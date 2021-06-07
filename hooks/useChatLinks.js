import { useEffect, useState } from "react";
import { auth, db } from "../firebase";

const useChatLinks = (chatId) => {
  const [links, setLinks] = useState([]);

  useEffect(() => {
    const listener = db
      .collection("chats")
      .doc(chatId)
      .collection("links")
      .orderBy("timestamp", "desc")
      .onSnapshot((querySnapshot) => {
        let links = [];
        querySnapshot.forEach((link) => links.push({ ...link.data(), id: link.id }));
        setLinks(links);
      });

    return () => {
      listener();
    };
  }, [chatId]);

  return links;
};

export default useChatLinks;
