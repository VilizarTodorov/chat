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

const useChats = (userChats) => {
  const [chats, setChats] = useState([]);

  useEffect(() => {
    const chatPromises = [];
    userChats.forEach((chat) => {
      const promise = db
        .collection("chats")
        .doc(chat.id)
        .get()
        .then((doc) => doc.data());
      chatPromises.push(promise);
    });
    Promise.all(chatPromises).then((chats) => setChats(chats));
  }, [userChats]);

  return chats;
};

export { useContacts, useUserChats, useChats, useUserDB, useAuthUser };

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
