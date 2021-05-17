import { createContext, useContext, useState } from "react";
import { useAuthUser, useChats, useContacts, useUserChats, useUserDB } from "./hooks";

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
