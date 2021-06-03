import React from "react";
import LinkIcon from "@material-ui/icons/Link";
import {
  Box,
  Button,
  Checkbox,
  Container,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  makeStyles,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles({
  container: {
    padding: "5px",
    display: "flex",
    transition: "all 0.25s",
    alignItems: "center",
    "&:hover": {
      backgroundColor: "#424242",
    },
    "&:hover $iconContainer": {
      padding: 0,
    },
    "&:hover $icon": {
      display: "block",
    },
  },
  iconContainer: {
    padding: "21px",
  },
  icon: {
    display: "none",
  },
  linkContainer: {
    background: "#486631",
    padding: "3px",
    borderRadius: "5px",
    display: "flex",
    flexDirection: "column",
  },
  innerLinkContainer: {
    display: "flex",
    backgroundColor: "#535353",
  },
  linkIcon: {
    fontSize: "80px",
    backgroundColor: "#3f3f3f",
  },
  textContainer: {
    height: "80px",
    overflow: "hidden",
    textOverflow: "ellipsis",
    padding: "2px",
  },
});

const LinkItem = () => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Box className={classes.iconContainer}>
        <Checkbox className={classes.icon}></Checkbox>
      </Box>
      <Box className={classes.linkContainer}>
        <Box className={classes.innerLinkContainer}>
          <LinkIcon className={classes.linkIcon}></LinkIcon>
          <Box className={classes.textContainer}>
            <Typography variant="subtitle2">
              It is a long established fact that a reader will be distracted by the readable content of a page when
              looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of
              letters, as opposed to using 'Content here, content here', making it look like readable English.
            </Typography>
          </Box>
        </Box>
        <Typography>
          <a target="_blank" href="google.com" rel="noopener noreferrer">
            google.com
          </a>
        </Typography>
      </Box>
    </Box>
  );
};

export default LinkItem;
