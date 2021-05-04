import { Avatar, Button, Container, IconButton, Input, Modal, TextField, Typography } from "@material-ui/core";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import styles from "../styles/Contacts.module.css";
import { useUser } from "../UserContext";
import ListOfPeople from "./ListOfPeople";
import Search from "./Search";
import { useRouter } from "next/router";

const Contacts = (props) => {
  const [open, setOpen] = useState(false);
  const user = useUser();
  const [contactEmail, setContactEmail] = useState("");
  const router = useRouter();

  const onSubmit = (e) => {
    e.preventDefault();
    db.collection("users")
      .doc(contactEmail)
      .get()
      .then(async (doc) => {
        if (doc.exists) {
          await db
            .collection("contacts")
            .doc(user.userDbEntry.email)
            .update({
              contacts: [...user.contacts, { ...doc.data() }],
            })
            .then(() => {
              console.log("Document successfully updated!");
            })
            .catch((error) => {
              // The document probably doesn't exist.
              console.error("Error updating document: ", error);
            });

          setOpen(false);
        } else {
          console.log("doc does not exist");
        }
      });
  };

  const createChatFunction = async (contact) => {
    const chat = user.userChats.find((chat) => chat.users.includes(contact));

    if (chat) {
      router.push(`/chat/${chat.id}`);
      return;
    }

    let chatRef = await db.collection("chats").add({ users: [contact, user.userDbEntry.email] });
    await chatRef.update({ id: chatRef.id });
    const newChat = await chatRef.get();

    let contactPromise = db
      .collection("userChats")
      .doc(contact)
      .get()
      .then(async (doc) => {
        await doc.ref.update({ chats: [...doc.data().chats, { ...newChat.data() }] });
      });

    let userPromise = db
      .collection("userChats")
      .doc(user.userDbEntry.email)
      .get()
      .then(async (doc) => {
        await doc.ref.update({ chats: [...doc.data().chats, { ...newChat.data() }] });
      });

    Promise.all([contactPromise, userPromise]).then(() => router.push(`/chat/${chatRef.id}`));
  };

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
      <ListOfPeople keyPrefix={"contact"} function={createChatFunction} list={user.contacts}></ListOfPeople>
      <Modal open={open} onClose={() => setOpen(false)}>
        <div className={styles.temp}>
          <form onSubmit={onSubmit} className={styles.addContactForm}>
            <Typography>Add new contacts</Typography>
            <TextField
              required
              label="Contact Email"
              value={contactEmail}
              onChange={(e) => setContactEmail(e.target.value)}
            ></TextField>
            <Button type="submit">Add contact</Button>
          </form>
        </div>
      </Modal>
    </Container>
  );
};

export default Contacts;
