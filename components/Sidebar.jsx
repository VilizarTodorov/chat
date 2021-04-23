import { Avatar, Button, IconButton } from "@material-ui/core";
import ChatIcon from "@material-ui/icons/Chat";
import React, { useState } from "react";
import styles from "../styles/Sidebar.module.css";
import Contacts from "./Contacts";
import ListOfPeople from "./ListOfPeople";
import Profile from "./Profile";
import Search from "./Search";
import SidebarMoreVertIconMenu from "./SidebarMoreVertIconMenu";

const Sidebar = (props) => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isContactsOpen, setIsContactsOpen] = useState(false);

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
      <ListOfPeople list={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]}></ListOfPeople>
      <Profile close={() => setIsProfileOpen(false)} isOpen={isProfileOpen}></Profile>
      <Contacts close={() => setIsContactsOpen(false)} isOpen={isContactsOpen}></Contacts>
    </div>
  );
};

export default Sidebar;
