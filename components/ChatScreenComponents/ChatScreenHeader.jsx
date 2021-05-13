import { Avatar, Box, IconButton, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import BaseHeader from "../BaseHeader";
import SearchIcon from "@material-ui/icons/Search";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const useStyles = makeStyles({
  container: {
    display: "flex",
    alignItems: "center",
  },
});

const ChatScreenHeader = () => {
  const classes = useStyles();
  return (
    <BaseHeader>
      <Box className={classes.container}>
        <Avatar></Avatar>
        <Typography>recipient email</Typography>
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
