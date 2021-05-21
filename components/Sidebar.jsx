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

const Sidebar = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isContactsOpen, setIsContactsOpen] = useState(false);
  const context = useUser();
  const router = useRouter();
  const [filteredChats, setFilteredChats] = useState([]);

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
      <Search
        setList={setFilteredChats}
        initialList={context.chats}
        searchFunction={() => console.log("sidebarSearch")}
      ></Search>
      <NewChatButton onClick={() => setIsContactsOpen(true)}></NewChatButton>
      <Chats chats={context.chats} userEmail={context.user.email} redirectFunction={callbackFunction}></Chats>
      <Profile close={() => setIsProfileOpen(false)} isOpen={isProfileOpen}></Profile>
      <Contacts close={() => setIsContactsOpen(false)} isOpen={isContactsOpen}></Contacts>
    </SidebarContainer>
  );
};

export default Sidebar;
