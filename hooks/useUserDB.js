import { useEffect, useState } from "react";
import { db } from "../firebase";

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

export default useUserDB;
