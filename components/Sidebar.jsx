import { Avatar, Button, IconButton } from "@material-ui/core";
import ChatIcon from "@material-ui/icons/Chat";
import React, { useEffect, useState } from "react";
import { db, firebase } from "../firebase";
import styles from "../styles/Sidebar.module.css";
import { useUser } from "../UserContext";
import Contacts from "./Contacts";
import ListOfPeople from "./ListOfPeople";
import Profile from "./Profile";
import Search from "./Search";
import SidebarMoreVertIconMenu from "./SidebarMoreVertIconMenu";

const Sidebar = (props) => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isContactsOpen, setIsContactsOpen] = useState(false);
  const user = useUser();

  return (
    <div className={styles.container}>
      <div className={styles.sidebarHeader}>
        <Avatar className={styles.userAvatar} onClick={() => setIsProfileOpen(true)} />
        <div>
          <IconButton onClick={() => setIsContactsOpen(true)}>
            <ChatIcon />
          </IconButton>
          <SidebarMoreVertIconMenu />
        </div>
      </div>
      <Search></Search>
      <Button className={styles.newChatButton}>START NEW CHAT</Button>
      <ListOfPeople keyPrefix="chat" list={user.chats}></ListOfPeople>
      <Profile close={() => setIsProfileOpen(false)} isOpen={isProfileOpen}></Profile>
      <Contacts close={() => setIsContactsOpen(false)} isOpen={isContactsOpen}></Contacts>
    </div>
  );
};

export default Sidebar;
