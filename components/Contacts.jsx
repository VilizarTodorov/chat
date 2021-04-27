import { Avatar, Button, Container, IconButton, Input, Modal, TextField, Typography } from "@material-ui/core";
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
  const [contactEmail, setContactEmail] = useState("");

  console.log(contacts);

  useEffect(() => {
    const listener = db
      .collection("contacts")
      .doc(user.userDbEntry.email)
      .onSnapshot((doc) => {
        if (doc.exists) {
          setContacts([...doc.data().contacts]);
        }
      });

    return () => {
      listener();
    };
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    db.collection("users")
      .doc(contactEmail)
      .get()
      .then(async (doc) => {
        if (doc.exists) {
          const res = await db
            .collection("contacts")
            .doc(user.userDbEntry.email)
            .get()
            .then((doc) => {
              if (doc.exists) {
                console.log(doc.data());
              } else {
                console.log("no");
              }

              return doc.exists;
            });

          console.log(res);

          await db
            .collection("contacts")
            .doc(user.userDbEntry.email)
            .update({
              contacts: [...contacts, { ...doc.data() }],
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
