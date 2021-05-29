import { Typography } from "@material-ui/core";
import React from "react";
import ChatInfoOptionContainer from "./ChatInfoOptionContainer";
import GeneralContainer from "./GeneralContainer";
import WithBorderTop from "./WithBorderTop";

const ChatInfoAbout = ({ recipientAbout }) => {
  return (
    <GeneralContainer>
      <Typography variant="caption">About and phone number</Typography>
      <ChatInfoOptionContainer>
        <Typography>{recipientAbout}</Typography>
      </ChatInfoOptionContainer>
      <WithBorderTop>
        <ChatInfoOptionContainer>
          <Typography>+359 55 555 5555</Typography>
        </ChatInfoOptionContainer>
      </WithBorderTop>
    </GeneralContainer>
  );
};

export default ChatInfoAbout;
