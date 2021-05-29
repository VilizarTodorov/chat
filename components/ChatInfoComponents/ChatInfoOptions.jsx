import { Checkbox, Typography } from "@material-ui/core";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import React, { useState } from "react";
import ChatInfoOptionContainer from "./ChatInfoOptionContainer";
import GeneralContainer from "./GeneralContainer";
import WithBorderTop from "./WithBorderTop";

const ChatInfoOptions = () => {
  const [checked, setChecked] = useState(false);

  return (
    <GeneralContainer>
      <ChatInfoOptionContainer>
        <Typography>Mute notifications</Typography>
        <Checkbox
          style={{ padding: 0 }}
          checked={checked}
          onChange={() => setChecked((c) => !c)}
          name="mute-notifications"
          color="primary"
        />
      </ChatInfoOptionContainer>
      <WithBorderTop>
        <ChatInfoOptionContainer>
          <Typography>Starred Messages</Typography>
          <ArrowForwardIosIcon></ArrowForwardIosIcon>
        </ChatInfoOptionContainer>
      </WithBorderTop>
      <WithBorderTop>
        <ChatInfoOptionContainer>
          <Typography>Disappearing Messages</Typography>
          <ArrowForwardIosIcon></ArrowForwardIosIcon>
        </ChatInfoOptionContainer>
      </WithBorderTop>
    </GeneralContainer>
  );
};

export default ChatInfoOptions;
