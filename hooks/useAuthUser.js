import { useEffect, useState } from "react";
import { auth } from "../firebase";

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

export default useAuthUser