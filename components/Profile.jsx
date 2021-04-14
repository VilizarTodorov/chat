import Container from "@material-ui/core/Container";
import React from "react";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import Typography from "@material-ui/core/Typography";
import { Avatar, IconButton, TextField } from "@material-ui/core";
import styled from "styled-components";

const Header = styled.div`
  display: flex;
  align-items: center;
`;

const HeaderContainer = styled(Container)`
  && {
    height: 15%;
    display: flex;
    align-items: flex-end;
    background-color: #00bfa5;
  }
`;

const BodyContainer = styled(Container)`
  && {
    padding: 0;
    background-color: #ededed;
    flex: 1;
  }
`;

const AvatarContainer = styled(Container)`
  && {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 256px;
  }
`;

const ProfileAvatar = styled(Avatar)`
  && {
    width: 200px;
    height: 200px;
  }
`;

const TextFieldContainer = styled(Container)`
  background-color: white;
  margin: 40px 0;
`;

const Profile = (props) => {
  return (
    <Container
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        padding: 0,
        overflow: "hidden",
        width: `${props.isOpen ? "100%" : "0"}`,
        zIndex: 3,
        backgroundColor: "#414141",
        height: "100vh",
        transition: "all 0.4s",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <HeaderContainer>
        <Header>
          <IconButton onClick={props.close}>
            <KeyboardBackspaceIcon></KeyboardBackspaceIcon>
          </IconButton>
          <Typography variant="h5">Profile</Typography>
        </Header>
      </HeaderContainer>
      <BodyContainer>
        <AvatarContainer>
          <ProfileAvatar></ProfileAvatar>
        </AvatarContainer>
        <TextFieldContainer>
          <TextField margin="normal" fullWidth label="Your Name"></TextField>
        </TextFieldContainer>
        <Typography style={{ margin: "20px" }} variant="subtitle1">
          This is not your username or pin. This name will be visible to your WhatsApp contacts.
        </Typography>
        <TextFieldContainer>
          <TextField margin="normal" fullWidth label="About"></TextField>
        </TextFieldContainer>
      </BodyContainer>
    </Container>
  );
};

export default Profile;
