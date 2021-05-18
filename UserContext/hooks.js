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

  useSubCollection("contacts", "contacts", setContacts, user);

  return contacts;
};

const useUserChats = (user) => {
  const [userChats, setUserChats] = useState([]);

  useSubCollection("userChats", "chats", setUserChats, user);

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

export { useContacts, useUserChats, useChats, useUserDB, useAuthUser };

const useSubCollection = (collection, subCollection, setFunc, user) => {
  useEffect(() => {
    const listener = db
      .collection(collection)
      .doc(user?.email)
      .collection(subCollection)
      .onSnapshot((querySnapshot) => {
        const arr = [];
        querySnapshot.forEach((item) => {
          arr.push(item.data());
        });
        setFunc(arr);
      });

    return () => {
      listener();
    };
  }, [user]);
};
