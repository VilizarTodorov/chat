import { Avatar, ListItem, ListItemAvatar, ListItemText } from "@material-ui/core";
import React from "react";
import styles from "../styles/Contact.module.css";

const Contact = (props) => {
  return (
    <ListItem className={styles.p17pxLeft} button alignItems="center">
      <ListItemAvatar>
        <Avatar className={styles.m17pxRight}></Avatar>
      </ListItemAvatar>
      <ListItemText className={styles.contactsListItemTextContainer} primary="Friend"></ListItemText>
    </ListItem>
  );
};

export default Contact;
