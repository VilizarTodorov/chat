import { Avatar, IconButton, makeStyles } from "@material-ui/core";
import React from "react";
import BaseHeader from "../BaseHeader";
import ChatIcon from "@material-ui/icons/Chat";
import SidebarMoreVertIconMenu from "../SidebarMoreVertIconMenu";

const useStyles = makeStyles({
  avatar: {
    cursor: "pointer",
    "&:hover": {
      opacity: 0.8,
    },
  },
});

const SidebarHeader = ({ openProfile, openContacts }) => {
  const classes = useStyles();
  return (
    <BaseHeader>
      <Avatar className={classes.avatar} onClick={openProfile}></Avatar>
      <div>
        <IconButton onClick={openContacts}>
          <ChatIcon />
        </IconButton>
        <SidebarMoreVertIconMenu />
      </div>
    </BaseHeader>
  );
};

export default SidebarHeader;