import { createContext, useContext, useEffect, useState } from "react";
import { auth, db } from "../firebase";
import { useContacts, useUserChats } from "./hooks";

export const UserContext = createContext();

export default function UserContextComp({ children }) {
  const [authUser, setAuthUser] = useState(null);
  const [user, setUser] = useState(null);
  const [chats, setChats] = useState([]);
  const contacts = useContacts(user);
  const userChats = useUserChats(user);
  const [loadingUser, setLoadingUser] = useState(true);
  const [error, setError] = useState(null);

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
