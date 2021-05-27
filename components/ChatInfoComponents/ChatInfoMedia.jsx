import { Box, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  imgContainer: {
    paddingTop: "37%",
    flexBasis: "32%",
    backgroundImage: (props) => `url(${props.img})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
});

const ChatInfoMedia = (props) => {
  const classes = useStyles(props);
  return <Box className={classes.imgContainer}></Box>;
};

export default ChatInfoMedia;
