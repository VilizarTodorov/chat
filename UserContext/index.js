import { createContext, useContext, useEffect, useState } from "react";
import { auth, db } from "../firebase";
import { useContacts } from "./hooks";

export const UserContext = createContext();

export default function UserContextComp({ children }) {
  const [authUser, setAuthUser] = useState(null);
  const [user, setUser] = useState(null);
  // const [contacts, setContacts] = useState([]);
  const [userChats, setUserChats] = useState([]);
  const [chats, setChats] = useState([]);
  const [loadingUser, setLoadingUser] = useState(true);
  const [error, setError] = useState(null);
  const contacts = useContacts(user?.email);

  useEffect(() => {
    const listener = auth.onAuthStateChanged(async (u) => {
      try {
        if (u) {
          setAuthUser(u);
        } else {
          setAuthUser(null);
          setUser(null);
        }
      } catch (error) {
        setError(error);
      } finally {
        // setLoadingUser(false);
      }
    });

    return () => {
      listener();
    };
  }, []);

  useEffect(() => {
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

  // useEffect(() => {
  //   const listener = db
  //     .collection("contacts")
  //     .doc(user?.email)
  //     .onSnapshot((doc) => {
  //       if (doc.exists) {
  //         setContacts([...doc.data().contacts]);
  //       }
  //     });

  //   return () => {
  //     listener();
  //   };
  // }, [user]);

  useEffect(() => {
    const listener = db
      .collection("userChats")
      .doc(user?.email)
      .onSnapshot((doc) => {
        if (doc.exists) {
          setUserChats([...doc.data().chats]);
        }
      });

    return () => {
      listener();
    };
  }, [user]);

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

  return (
    <UserContext.Provider value={{ user, setUser, contacts, userChats, chats, loadingUser, error }}>
      {children}
    </UserContext.Provider>
  );
}

export const useUser = () => useContext(UserContext);
