import { Button, Container, IconButton, Typography } from "@material-ui/core";
import List from "@material-ui/core/List";
import SearchIcon from "@material-ui/icons/Search";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import React from "react";
import Contact from "./Contact";
import { useUser } from "../UserContext";

const Contacts = (props) => {
  const user = useUser();

  return (
    <Container
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        padding: 0,
        overflow: "hidden",
        width: `${props.isOpen ? "100%" : "0"}`,
        zIndex: 110,
        backgroundColor: "#414141",
        height: "100vh",
        transition: "all 0.4s",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div className="header-container">
        <div className="header-part">
          <IconButton onClick={props.close}>
            <KeyboardBackspaceIcon></KeyboardBackspaceIcon>
          </IconButton>
          <Typography variant="h5">Contacts</Typography>
        </div>
      </div>
      <div className="search">
        <SearchIcon />
        <input className="searchInput" placeholder="Search in chats" />
      </div>
      <Container className="add-new-contact-container">
        <PersonAddIcon></PersonAddIcon>
        <Button className="add-new-contact-button">ADD NEW CONTACT</Button>
      </Container>
      <List>
        {user.userDbEntry.friendsList.map((friend) => (
          <Contact key={friend} recipient={`test${friend}`}></Contact>
        ))}
      </List>
    </Container>
  );
};

export default Contacts;
