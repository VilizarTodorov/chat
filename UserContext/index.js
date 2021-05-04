import { createContext, useContext, useEffect, useState } from "react";
import { auth, db } from "../firebase";

export const UserContext = createContext();

export default function UserContextComp({ children }) {
  const [userDbEntry, setUserDbEntry] = useState(null);
  const [contacts, setContacts] = useState([]);
  const [userChats, setUserChats] = useState([]);
  const [chats, setChats] = useState([]);
  const [loadingUser, setLoadingUser] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const listener = auth.onAuthStateChanged(async (user) => {
      try {
        if (user) {
          await db
            .collection("users")
            .doc(user.email)
            .get()
            .then((doc) => {
              if (doc.exists) {
                setUserDbEntry({ ...userDbEntry, uid: user.uid, ...doc.data() });
              }
            });
        } else {
          setUserDbEntry(null);
        }
      } catch (error) {
        setError(error);
      } finally {
        setLoadingUser(false);
      }
    });

    return () => {
      listener();
    };
  }, []);

  useEffect(() => {
    const listener = db
      .collection("contacts")
      .doc(userDbEntry?.email)
      .onSnapshot((doc) => {
        if (doc.exists) {
          setContacts([...doc.data().contacts]);
        }
      });

    return () => {
      listener();
    };
  }, [userDbEntry]);

  useEffect(() => {
    const listener = db
      .collection("userChats")
      .doc(userDbEntry?.email)
      .onSnapshot((doc) => {
        if (doc.exists) {
          setUserChats([...doc.data().chats]);
        }
      });

    return () => {
      listener();
    };
  }, [userDbEntry]);

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
    <UserContext.Provider value={{ chats, userChats, contacts, userDbEntry, loadingUser, error, setUserDbEntry }}>
      {children}
    </UserContext.Provider>
  );
}

export const useUser = () => useContext(UserContext);
