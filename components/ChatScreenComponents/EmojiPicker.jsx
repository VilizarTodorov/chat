import { Container, makeStyles } from "@material-ui/core";
import React from "react";
import "emoji-mart/css/emoji-mart.css";
import { Picker } from "emoji-mart";

const useStyles = makeStyles({
  container: {
    padding: 0,
    backgroundColor: "white",
    height: 0,
    overflow: "hidden",
    transition: "all 0.35s",
  },
  active: {
    height: "250px",
  },
});

const EmojiPicker = ({ isOpen, setMessage }) => {
  const classes = useStyles();
  return (
    <Container className={`${classes.container} ${isOpen && classes.active}`}>
      <Picker
        title="Pick your emoji…"
        emoji="point_up"
        style={{ width: "auto", height: "100%" }}
        theme="dark"
        set="facebook"
        onSelect={(emoji) => setMessage((message) => message + emoji.native)}
      ></Picker>
    </Container>
  );
};

export default EmojiPicker;
