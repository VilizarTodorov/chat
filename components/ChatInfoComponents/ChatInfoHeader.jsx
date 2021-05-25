import React from "react";
import BaseHeader from "../BaseHeader";
import ClearIcon from "@material-ui/icons/Clear";
import { Box, IconButton, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  container: {
    display: "flex",
    alignItems: "center",
  },
});

const ChatInfoHeader = ({ close }) => {
  const classes = useStyles();
  return (
    <BaseHeader>
      <Box className={classes.container}>
        <IconButton onClick={close}>
          <ClearIcon></ClearIcon>
        </IconButton>
        <Typography>Contact info</Typography>
      </Box>
    </BaseHeader>
  );
};

export default ChatInfoHeader;
