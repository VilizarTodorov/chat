import { Avatar, Box, IconButton, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import BaseHeader from "../BaseHeader";
import SearchIcon from "@material-ui/icons/Search";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import useCountRenders from "../../hooks/useCountRenders";

const useStyles = makeStyles({
  container: {
    display: "flex",
    alignItems: "center",
  },
  avatar: {
    marginRight: "15px",
  },
});

const ChatScreenHeader = ({ recipient, photoURL }) => {
  useCountRenders();
  const classes = useStyles();
  return (
    <BaseHeader>
      <Box className={classes.container}>
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

export default React.memo(ChatScreenHeader);
