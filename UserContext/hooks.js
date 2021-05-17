import { useEffect, useState } from "react";
import { db } from "../firebase";

const useContacts = (user) => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const listener = db
      .collection("contacts")
      .doc(user?.email)
      .collection("contacts")
      .onSnapshot((querySnapshot) => {
        const userContacts = [];
        querySnapshot.forEach((c) => {
          userContacts.push(c.data());
        });
        setContacts(userContacts);
      });

    return () => {
      listener();
    };
  }, [user]);

  return contacts;
};

const useUserChats = (user) => {
  const [userChats, setUserChats] = useState([]);

  useEffect(() => {
    const listener = db
      .collection("userChats")
      .doc(user?.email)
      .collection("chats")
      .onSnapshot((querySnapshot) => {
        const chats = [];
        querySnapshot.forEach((c) => {
          chats.push(c.data());
        });
        setUserChats(chats);
      });

    return () => {
      listener();
    };
  }, [user]);

  return userChats;
};

export { useContacts, useUserChats };

const useSubCollection = (collection, docId, subCollection, setFunc, user) => {
  useEffect(() => {
    const listener = db
      .collection(collection)
      .doc(docId)
      .collection(subCollection)
      .onSnapshot((querySnapshot) => {
        const arr = [];
        querySnapshot.forEach((item) => {
          userContacts.push(item.data());
        });
        setFunc(arr);
      });

    return () => {
      listener();
    };
  }, [user]);
};
