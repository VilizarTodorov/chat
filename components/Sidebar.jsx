import { useRouter } from "next/router";
import React, { useState } from "react";
import { useUser } from "../UserContext";
import Contacts from "./Contacts";
import Profile from "./Profile";
import Search from "./Search";
import Chats from "./SidebarComponents/Chats";
import NewChatButton from "./SidebarComponents/NewChatButton";
import SidebarContainer from "./SidebarComponents/SidebarContainer";
import SidebarHeader from "./SidebarComponents/SidebarHeader";

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
    <SidebarContainer>
      <SidebarHeader
        openProfile={() => setIsProfileOpen(true)}
        openContacts={() => setIsContactsOpen(true)}
      ></SidebarHeader>
      <Search></Search>
      <NewChatButton onClick={() => setIsContactsOpen(true)}></NewChatButton>
      <Chats chats={user.chats} user={user} redirectFunction={callbackFunction}></Chats>
      <Profile close={() => setIsProfileOpen(false)} isOpen={isProfileOpen}></Profile>
      <Contacts close={() => setIsContactsOpen(false)} isOpen={isContactsOpen}></Contacts>
    </SidebarContainer>
  );
};

export default Sidebar;
