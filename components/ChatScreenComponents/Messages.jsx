import { Container, makeStyles } from "@material-ui/core";
import React, { Fragment, useRef, useState } from "react";
import Message from "./Message";
import ScrollDownButton from "./ScrollDownButton";

const useStyles = makeStyles({
  container: {
    paddingLeft:"64px",
    paddingRight:"64px",
    display: "flex",
    flexDirection: "column-reverse",
    flex: 1,
    overflowY: "scroll",
    msOverflowStyle: "none",
    scrollbarWidth: "none",
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
});

const Messages = ({ messages,userEmail,chatId }) => {
  const classes = useStyles();
  const ref = useRef(null);
  const [scrollDownButtonVisible, setScrollDownButtonVisible] = useState(false);

  const scrollDown = () => {
    ref.current.scrollTop = ref.current.scrollHeight;
    setScrollDownButtonVisible(false);
  };

  const onScroll = () => {
    if (ref.current.scrollTop > -130) {
      setScrollDownButtonVisible(false);
      return;
    }

    if (scrollDownButtonVisible) {
      return;
    }

    if (ref.current.scrollTop <= -130) {
      setScrollDownButtonVisible(true);
      return;
    }
  };

  return (
    <Fragment>
      <Container onScroll={onScroll} ref={ref} className={classes.container}>
        {messages.map((msg) => {
          const isSender = msg.user === userEmail;
          return (
            <Message
              key={msg.id}
              sender={isSender}
              message={msg.message}
              timestamp={msg.timestamp}
              chatId={chatId}
              messageId={msg.id}
            ></Message>
          );
        })}
      </Container>
      <ScrollDownButton scrollDown={scrollDown} isVisible={scrollDownButtonVisible}></ScrollDownButton>
    </Fragment>
  );
};

export default Messages;
