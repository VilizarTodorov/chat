import { Avatar, Button, IconButton, Input } from "@material-ui/core";
import ChatIcon from "@material-ui/icons/Chat";
import SearchIcon from "@material-ui/icons/Search";
import React, { useState } from "react";
import Chats from "./Chats";
import Profile from "./Profile";
import SidebarMoreVertIconMenu from "./SidebarMoreVertIconMenu";
import styles from "../styles/Sidebar.module.css";

const Sidebar = (props) => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.sidebarHeader}>
        <Avatar className={styles.userAvatar} onClick={() => setIsProfileOpen(true)} />
        <div>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <SidebarMoreVertIconMenu />
        </div>
      </div>
      <div className={styles.search}>
        <SearchIcon />
        <input className={styles.searchInput} placeholder="Search in chats" />
      </div>
      <Button className={styles.newChatButton}>START NEW CHAT</Button>
      <Chats chats={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]}></Chats>
      <Profile close={() => setIsProfileOpen(false)} isOpen={isProfileOpen}></Profile>
    </div>
  );
};

export default Sidebar;
