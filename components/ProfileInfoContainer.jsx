import { Box, Container, Input } from "@material-ui/core";
import React, { useRef, useState } from "react";
import styles from "../styles/ProfileInfo.module.css";
import CreateIcon from "@material-ui/icons/Create";
import CheckIcon from "@material-ui/icons/Check";

const ProfileInfoContainer = (props) => {
  const [isFocused, setIsFocused] = useState(false);
  const inputEl = useRef(null);

  console.log(isFocused);
  console.log(inputEl);

  const focus = () => {
    setIsFocused(true);
    inputEl.current.focus();
  };

  const blur = () => {
    setIsFocused(false);
    inputEl.current.blur();
  };

  return (
    <Container className={styles.infoContainer}>
      <Box component="span">{props.title}</Box>
      <Box className={styles.infoInputContainer}>
        <Input
          inputRef={inputEl}
          placeholder="Kimi no na wa"
          className={`${styles.infoInput} ${styles[`MuiInput-underline`]} ${isFocused ? styles.active : ""}`}
        ></Input>
        <CreateIcon
          onClick={focus}
          className={`${styles.infoIcon} ${isFocused ? "" : styles.iconVisible}`}
        ></CreateIcon>
        <CheckIcon onClick={blur} className={`${styles.infoIcon} ${isFocused ? styles.iconVisible : ""}`}></CheckIcon>
      </Box>
    </Container>
  );
};

export default ProfileInfoContainer;
