import { useEffect, useState } from "react";
import { auth, db } from "../firebase";

const useAuthUser = (setError) => {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const listener = auth.onAuthStateChanged(async (u) => {
      try {
        if (u) {
          setAuthUser(u);
        } else {
          setAuthUser(null);
        }
      } catch (error) {
        setError(error);
      }
    });

    return () => {
      listener();
    };
  }, []);

  return authUser;
};

const useUserDB = (authUser, setLoadingUser) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (!authUser) {
      setUser(null);
    }

    const listener = db
      .collection("users")
      .doc(authUser?.email)
      .onSnapshot((doc) => {
        if (doc.exists) {
          setUser({ ...user, uid: authUser.uid, ...doc.data() });
        }
        setLoadingUser(false);
      });

    return () => {
      listener();
    };
  }, [authUser]);

  return [user, setUser];
};

const useContacts = (user) => {
  const [contacts, setContacts] = useState([]);

  const callback = (querySnapshot, setFunc) => {
    const arr = [];
    querySnapshot.forEach((item) => {
      arr.push({ ...item.data(), displayEmail: item.data().email });
    });
    setFunc(arr);
  };

  useSubCollection("contacts", "contacts", setContacts, user, callback);

  return contacts;
};

const useUserChats = (user) => {
  const [userChats, setUserChats] = useState([]);

  const callback = (querySnapshot, setFunc) => {
    const arr = [];
    querySnapshot.forEach((item) => {
      arr.push(item.data());
    });
    setFunc(arr);
  };

  useSubCollection("userChats", "chats", setUserChats, user, callback);

  return userChats;
};

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

export { useContacts, useUserChats, useChats, useUserDB, useAuthUser, useMessages, useChat, useChatLinks };

const useSubCollection = (collection, subCollection, setFunc, user, callback) => {
  useEffect(() => {
    const listener = db
      .collection(collection)
      .doc(user?.email)
      .collection(subCollection)
      .onSnapshot((querySnapshot) => callback(querySnapshot, setFunc));

    return () => {
      listener();
    };
  }, [user]);
};
