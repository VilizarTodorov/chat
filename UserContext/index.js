import { useRouter } from "next/router";
import { useState, useEffect, createContext, useContext } from "react";
import Loading from "../components/Loading";
import Login from "../components/Login";
import Register from "../components/Register";
import { auth, db } from "../firebase";

export const UserContext = createContext();

export default function UserContextComp({ children }) {
  const [userDbEntry, setUserDbEntry] = useState(null);
  const [loadingUser, setLoadingUser] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const listener = auth.onAuthStateChanged(async (user) => {
      try {
        if (user) {
          await db
            .collection("users")
            .doc(user.email)
            .get()
            .then((doc) => {
              setUserDbEntry({ uid: user.uid, ...doc.data() });
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

  if (loadingUser) {
    return <Loading></Loading>;
  }
  if (error) {
    console.log(error);
    return <div>something went wrong </div>;
  }
  if (!userDbEntry && router.pathname === "/register") {
    return <Register></Register>;
  }
  if (!userDbEntry) {
    return <Login></Login>;
  }

  return <UserContext.Provider value={{ userDbEntry, loadingUser, error }}>{children}</UserContext.Provider>;
}

export const useUser = () => useContext(UserContext);
