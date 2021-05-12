import { Avatar, ListItem, ListItemAvatar, ListItemText, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  listItem: {
    paddingLeft: "17px",
    height: "70px",
    paddingTop: 0,
    paddingBottom: 0,
  },

  avatar: {
    marginRight: "17px",
  },

  listItemText: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: "100%",
    marginTop: 0,
    marginBottom: 0,
    borderBottom: "1px solid rgba(255, 255, 255, 0.08);",
  },
});

const Person = ({ callbackFunction, photoUrl, email, message }) => {
  const classes = useStyles();
  return (
    <ListItem className={classes.listItem} onClick={callbackFunction} button alignItems="center">
      <ListItemAvatar>
        <Avatar className={classes.avatar} src={photoUrl} alt={`${email}'s profile picture`}></Avatar>
      </ListItemAvatar>
      <ListItemText
        className={classes.listItemText}
        primary={email}
        secondary={<Typography color="textSecondary">{message}</Typography>}
      />
    </ListItem>
  );
};

export default Person;
