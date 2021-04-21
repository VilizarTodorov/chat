import { Avatar, Box, Button, Container, IconButton, Input, Modal, Typography } from "@material-ui/core";
import List from "@material-ui/core/List";
import SearchIcon from "@material-ui/icons/Search";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import React, { useState } from "react";
import Contact from "./Contact";
import { useUser } from "../UserContext";
import styles from "../styles/Contacts.module.css";

const Contacts = (props) => {
  const [isAddNeContactOpen, setIsAddNeContactOpen] = useState(false);
  const user = useUser();

  return (
    <Container className={`${styles.container} ${props.isOpen ? styles.active : ""}`}>
      <div className={styles.headerContainer}>
        <div className={styles.headerPart}>
          <IconButton className={styles.padding25px} onClick={props.close}>
            <KeyboardBackspaceIcon className={styles.icon}></KeyboardBackspaceIcon>
          </IconButton>
          <Typography variant="h5">Contacts</Typography>
        </div>
      </div>
      <div className={styles.searchContainer}>
        <div className={styles.search}>
          <SearchIcon className={styles.searchIcon} />
          <input className={styles.searchInput} placeholder="Search in chats" />
        </div>
      </div>
      <div className={styles.addContactContainer}>
        <Avatar className={styles.m17px}>
          <PersonAddIcon></PersonAddIcon>
        </Avatar>
        <span>ADD NEW CONTACT</span>
        {/* <Modal open={isAddNeContactOpen} onClose={() => setIsAddNeContactOpen(false)}>
          <div>
            <Typography variant="h5">Add new contact</Typography>
            <Input placeholder="New contact email"></Input>
            <Button onClick={() => console.log("add")}>Add new contact</Button>
          </div>
        </Modal> */}
      </div>

      <List>
        {user.userDbEntry.friendsList.map((friend) => (
          <Contact key={friend} recipient={`test${friend}`}></Contact>
        ))}
      </List>
    </Container>
  );
};

export default Contacts;
