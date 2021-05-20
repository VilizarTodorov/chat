import { createContext, useContext, useState } from "react";
import Alert from "../components/Alert";
import { useAuthUser, useChats, useContacts, useUserChats, useUserDB } from "./hooks";

export const UserContext = createContext();

export default function UserContextComp({ children }) {
  const [alert, setAlert] = useState({ open: false, severity: "success", title: "", message: "" });
  const [loadingUser, setLoadingUser] = useState(true);
  const authUser = useAuthUser(setAlert);
  const [user, setUser] = useUserDB(authUser, setLoadingUser);
  const contacts = useContacts(user);
  const userChats = useUserChats(user);
  const chats = useChats(userChats);

  return (
    <UserContext.Provider value={{ user, setUser, contacts, userChats, chats, loadingUser, alert, setAlert }}>
      {children}
      <Alert></Alert>
    </UserContext.Provider>
  );
}

export const useUser = () => useContext(UserContext);
