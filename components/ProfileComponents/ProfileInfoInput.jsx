import { Box, Container, Input, makeStyles, Typography } from "@material-ui/core";
import CheckIcon from "@material-ui/icons/Check";
import CreateIcon from "@material-ui/icons/Create";
import React, { useRef, useState } from "react";

const useStyles = makeStyles({
  inputContainer: {
    position: "relative",
    display: "flex",
    alignItems: "center",
  },
  input: {
    margin: "10px 0",
    flex: 1,
    pointerEvents: "none",
  },
  inputActive: {
    pointerEvents: "initial",
  },
  icon: {
    position: "absolute",
    right: 0,
    cursor: "pointer",
    opacity: 0,
    width: 0,
    overflow: "hidden",
    transition: "all 0.25s",
  },
  iconActive: {
    opacity: 1,
    width: "auto",
    overflow: "visible",
  },
});

const ProfileInfoInput = ({ id, name, type, value, onChange, placeholder, label }) => {
  const classes = useStyles();
  const [isFocused, setIsFocused] = useState(false);
  const inputElement = useRef(null);

  const focus = () => {
    setIsFocused(true);
    inputElement.current.focus();
  };

  const blur = () => {
    setIsFocused(false);
    inputElement.current.blur();
  };

  return (
    <Container>
      <Typography variant="subtitle2">{label}</Typography>
      <Box className={classes.inputContainer}>
        <Input
          id={id}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required
          inputRef={inputElement}
          className={`${classes.input} ${isFocused && classes.inputActive}`}
        ></Input>
        <CreateIcon onClick={focus} className={`${classes.icon} ${!isFocused && classes.iconActive}`}></CreateIcon>
        <CheckIcon onClick={blur} className={`${classes.icon} ${isFocused && classes.iconActive}`}></CheckIcon>
      </Box>
    </Container>
  );
};

export default ProfileInfoInput;
