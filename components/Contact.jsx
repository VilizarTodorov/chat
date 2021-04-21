import { Avatar, ListItem, ListItemAvatar, ListItemText } from "@material-ui/core";
import React from "react";

const Contact = (props) => {
  return (
    <ListItem button alignItems="center">
      <ListItemAvatar>
        <Avatar></Avatar>
      </ListItemAvatar>
      <ListItemText primary="Friend"></ListItemText>
    </ListItem>
  );
};

export default Contact;
