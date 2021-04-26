import { useState, useEffect, createContext, useContext } from "react";
import Loading from "../components/Loading";
import Login from "../components/Login";
import { auth, db } from "../firebase";

export const UserContext = createContext();

export default function UserContextComp({ children }) {
  const [uid, setUid] = useState(null);
  const [userDbEntry, setUserDbEntry] = useState(null);
  const [loadingUser, setLoadingUser] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const listener = auth.onAuthStateChanged(async (user) => {
      try {
        if (user) {
          setUid(user.uid);
          await db
            .collection("users")
            .doc(user.uid)
            .get()
            .then((doc) => {
              setUserDbEntry({ uid: user.uid, ...doc.data() });
            });
        } else {
          setUid(null);
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

  if (loadingUser) {
    return <Loading></Loading>;
  }
  if (error) {
    console.log(error);
    return <div>something went wrong </div>;
  }
  if (!userDbEntry) {
    return <Login></Login>;
  }

  return <UserContext.Provider value={{ userDbEntry, loadingUser, error, uid }}>{children}</UserContext.Provider>;
}

export const useUser = () => useContext(UserContext);
