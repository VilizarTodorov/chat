import { Avatar, Button, IconButton } from "@material-ui/core";
import ChatIcon from "@material-ui/icons/Chat";
import SearchIcon from "@material-ui/icons/Search";
import React from "react";
import styled from "styled-components";
import Chats from "./Chats";
import SidebarMoreVertIconMenu from "./SidebarMoreVertIconMenu";

const Container = styled.div``;

const Header = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 1;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  height: 80px;
  border-bottom: 2px solid whitesmoke;
`;

const IconsContainer = styled.div``;

const UserAvatar = styled(Avatar)`
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

const Search = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  border-radius: 2px;
`;

const SearchInput = styled.input`
  outline: none;
  border: none;
  outline-width: 0;
  flex: 1;
`;

const NewChatButton = styled(Button)`
  width: 100%;
  &&& {
    border-top: 1px solid whitesmoke;
    border-bottom: 1px solid whitesmoke;
  }
`;

const Sidebar = (props) => {
  return (
    <Container>
      <Header>
        <UserAvatar />
        <IconsContainer>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <SidebarMoreVertIconMenu />
        </IconsContainer>
      </Header>
      <Search>
        <SearchIcon />
        <SearchInput placeholder="Search in chats" />
      </Search>
      <NewChatButton>START NEW CHAT</NewChatButton>
      <Chats chats={[1, 2, 3, 4]}></Chats>
    </Container>
  );
};

export default Sidebar;
