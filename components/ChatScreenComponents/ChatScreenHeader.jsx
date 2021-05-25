import { Avatar, Box, IconButton, makeStyles, Typography } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchIcon from "@material-ui/icons/Search";
import React from "react";
import BaseHeader from "../BaseHeader";

const useStyles = makeStyles({
  container: {
    display: "flex",
    alignItems: "center",
  },
  avatar: {
    marginRight: "15px",
  },
});

const ChatScreenHeader = ({ openChatInfo, recipient, photoURL }) => {
  const classes = useStyles();
  return (
    <BaseHeader>
      <Box onClick={openChatInfo} className={classes.container}>
        <Avatar className={classes.avatar} src={photoURL} alt={`${recipient}'s profile picture`}></Avatar>
        <Typography>{recipient}</Typography>
      </Box>
      <Box className={classes.container}>
        <IconButton>
          <SearchIcon></SearchIcon>
        </IconButton>
        <IconButton>
          <MoreVertIcon></MoreVertIcon>
        </IconButton>
      </Box>
    </BaseHeader>
  );
};

export default ChatScreenHeader;
