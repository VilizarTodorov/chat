import { Box, Container, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ChatInfoMedia from "./ChatInfoMedia";
import GeneralContainer from "./GeneralContainer";

const useStyles = makeStyles({
  box: {
    margin: "10px 0",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  imgContainer: {
    flexBasis: "30%",
  },
});

const ChatInfoMediaLinksDocs = ({ open }) => {
  const classes = useStyles();
  return (
    <GeneralContainer>
      <Box onClick={open} className={classes.box}>
        <Typography>Media, Links and Docs</Typography>
        <ArrowForwardIosIcon fontSize="small"></ArrowForwardIosIcon>
      </Box>
      <Box className={classes.box}>
        <ChatInfoMedia img="https://images.unsplash.com/photo-1482784160316-6eb046863ece?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"></ChatInfoMedia>
        <ChatInfoMedia img="https://images.unsplash.com/photo-1482784160316-6eb046863ece?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"></ChatInfoMedia>
        <ChatInfoMedia img="https://images.unsplash.com/photo-1482784160316-6eb046863ece?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"></ChatInfoMedia>
      </Box>
    </GeneralContainer>
  );
};

export default ChatInfoMediaLinksDocs;
