import { createContext, useContext, useEffect, useState } from "react";
import { auth, db } from "../firebase";

export const UserContext = createContext();

export default function UserContextComp({ children }) {
  const [user, setUser] = useState(null);
  const [contacts, setContacts] = useState([]);
  const [userChats, setUserChats] = useState([]);
  const [chats, setChats] = useState([]);
  const [loadingUser, setLoadingUser] = useState(true);
  const [error, setError] = useState(null);

  console.log(auth.currentUser)

  useEffect(() => {
    const listener = auth.onAuthStateChanged(async (u) => {
      try {
        if (u) {
          await db
            .collection("users")
            .doc(u.email)
            .get()
            .then((doc) => {
              if (doc.exists) {
                setUser({ ...user, uid: u.uid, ...doc.data() });
              }
            });
        } else {
          setUser(null);
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
      .doc(user?.email)
      .onSnapshot((doc) => {
        if (doc.exists) {
          setContacts([...doc.data().contacts]);
        }
      });

    return () => {
      listener();
    };
  }, [user]);

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
