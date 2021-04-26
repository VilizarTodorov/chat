import { Avatar, Button, Container, IconButton, Input, Modal, Typography } from "@material-ui/core";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import styles from "../styles/Contacts.module.css";
import { useUser } from "../UserContext";
import ListOfPeople from "./ListOfPeople";
import Search from "./Search";

const Contacts = (props) => {
  const [open, setOpen] = useState(false);
  const user = useUser();
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const listener = db
      .collection("contacts")
      .doc(user.uid)
      .onSnapshot((doc) => {
        if (doc.exists) {
          setContacts([...doc.data().contacts]);
        }
      });

    return () => {
      listener();
    };
  }, []);

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
      <Search></Search>
      <div onClick={() => setOpen(true)} className={styles.addContactContainer}>
        <Avatar className={styles.m17px}>
          <PersonAddIcon></PersonAddIcon>
        </Avatar>
        <div className={styles.addContactText}>ADD NEW CONTACT</div>
      </div>
      <ListOfPeople list={contacts}></ListOfPeople>
      <Modal open={open} onClose={() => setOpen(false)}>
        <Typography>ASDASD</Typography>
      </Modal>
    </Container>
  );
};

export default Contacts;
