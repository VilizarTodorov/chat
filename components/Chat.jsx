import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import React from "react";
import styled from "styled-components";

const Chat = (props) => {
  return (
    <ListItem button alignItems="center">
      <ListItemAvatar>
        <Avatar />
      </ListItemAvatar>
      <StyledListItemText primary={props.recipient} />
    </ListItem>
  );
};

const StyledListItemText = styled(ListItemText)`
  margin-left: 10px;
`;

export default Chat;
