import React from "react";
import BaseHeader from "../BaseHeader";
import ClearIcon from "@material-ui/icons/Clear";
import { IconButton, Typography } from "@material-ui/core";

const ChatInfoHeader = ({ isOpen, close }) => {
  return (
    <BaseHeader>
      <IconButton>
        <ClearIcon></ClearIcon>
      </IconButton>
      <Typography>Contact info</Typography>
    </BaseHeader>
  );
};

export default ChatInfoHeader;
