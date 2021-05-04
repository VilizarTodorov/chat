import { Avatar, ListItem, ListItemAvatar, ListItemText, Typography } from "@material-ui/core";
import React from "react";
import styles from "../styles/Person.module.css";

const Person = ({ callbackFunction, photoUrl, email, message }) => {
  return (
    <ListItem onClick={callbackFunction} className={styles.listItem} button alignItems="center">
      <ListItemAvatar>
        <Avatar className={styles.avatar} src={photoUrl} alt={`${email}'s profile picture`}></Avatar>
      </ListItemAvatar>
      <ListItemText
        className={styles.contactsListItemTextContainer}
        primary={email}
        secondary={<Typography color="inherit">{message}</Typography>}
      ></ListItemText>
    </ListItem>
  );
};

export default Person;
