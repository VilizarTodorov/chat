import { Avatar, Button, IconButton } from "@material-ui/core";
import ChatIcon from "@material-ui/icons/Chat";
import { useRouter } from "next/router";
import React, { useState } from "react";
import styles from "../styles/Sidebar.module.css";
import { useUser } from "../UserContext";
import Contacts from "./Contacts";
import ListOfPeople from "./List";
import Person from "./Person";
import Profile from "./Profile";
import Search from "./Search";
import SidebarHeader from "./SidebarComponents/SidebarHeader";
import SidebarMoreVertIconMenu from "./SidebarMoreVertIconMenu";

const Sidebar = (props) => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isContactsOpen, setIsContactsOpen] = useState(false);
  const user = useUser();
  const router = useRouter();

  const callbackFunction = (id) => {
    return () => {
      router.push(`/chat/${id}`);
      return;
    };
  };

  return (
    <div className={styles.container}>
      <SidebarHeader
        openProfile={() => setIsProfileOpen(true)}
        openContacts={() => setIsContactsOpen(true)}
      ></SidebarHeader>
      <Search></Search>
      <Button className={styles.newChatButton}>START NEW CHAT</Button>
      <ListOfPeople>
        {user.chats.map((chat) => {
          const email = chat.users.filter((x) => x !== user.userDbEntry.email)[0];
          const contact = user.contacts.find((contact) => contact.email === email);
          return (
            <Person
              key={`${email}chat`}
              callbackFunction={callbackFunction(chat.id)}
              email={email}
              photoUrl={contact?.photo}
              message={"Hi I'm using chat"}
            ></Person>
          );
        })}
      </ListOfPeople>
      <Profile close={() => setIsProfileOpen(false)} isOpen={isProfileOpen}></Profile>
      <Contacts close={() => setIsContactsOpen(false)} isOpen={isContactsOpen}></Contacts>
    </div>
  );
};

export default Sidebar;
