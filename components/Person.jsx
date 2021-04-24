import { Avatar, ListItem, ListItemAvatar, ListItemText, Typography } from "@material-ui/core";
import React from "react";
import styles from "../styles/Person.module.css";

const Person = (props) => {
  return (
    <ListItem className={styles.listItem} button alignItems="center">
      <ListItemAvatar>
        <Avatar className={styles.avatar}></Avatar>
      </ListItemAvatar>
      <ListItemText
        className={styles.contactsListItemTextContainer}
        primary="Friend"
        secondary={<Typography color="inherit">Hi, I am using chat!</Typography>}
      ></ListItemText>
    </ListItem>
  );
};

export default Person;
