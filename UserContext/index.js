import { useState, useEffect, createContext, useContext } from "react";
import { auth, db } from "../firebase";

export const UserContext = createContext();

export default function UserContextComp({ children }) {
  const [userDbEntry, setUserDbEntry] = useState(null);
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

  return (
    <UserContext.Provider value={{ userDbEntry, loadingUser, error, setUserDbEntry }}>{children}</UserContext.Provider>
  );
}

export const useUser = () => useContext(UserContext);
