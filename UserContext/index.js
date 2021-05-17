import { createContext, useContext, useEffect, useState } from "react";
import { auth, db } from "../firebase";
import { useContacts, useUserChats, useChats, useUserDB, useAuthUser } from "./hooks";

export const UserContext = createContext();

export default function UserContextComp({ children }) {
  const [error, setError] = useState(null);
  const [loadingUser, setLoadingUser] = useState(true);
  const authUser = useAuthUser(setError);
  const [user, setUser] = useUserDB(authUser, setLoadingUser);
  const contacts = useContacts(user);
  const userChats = useUserChats(user);
  const chats = useChats(userChats);

  return (
    <UserContext.Provider value={{ user, setUser, contacts, userChats, chats, loadingUser, error }}>
      {children}
    </UserContext.Provider>
  );
}

export const useUser = () => useContext(UserContext);
