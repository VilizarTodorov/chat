import { Avatar, ListItem, ListItemAvatar, ListItemText, Typography } from "@material-ui/core";
import React from "react";
import styles from "../styles/Person.module.css";

const Person = (props) => {
  return (
    <ListItem onClick={props.function} className={styles.listItem} button alignItems="center">
      <ListItemAvatar>
        <Avatar className={styles.avatar} src={props.photoUrl} alt={`${props.email}'s profile picture`}></Avatar>
      </ListItemAvatar>
      <ListItemText
        className={styles.contactsListItemTextContainer}
        primary={props.email}
        secondary={<Typography color="inherit">{props.message}</Typography>}
      ></ListItemText>
    </ListItem>
  );
};

export default Person;
