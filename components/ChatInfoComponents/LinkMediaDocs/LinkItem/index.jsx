import { Box, Checkbox, makeStyles, Typography } from "@material-ui/core";
import LinkIcon from "@material-ui/icons/Link";
import React from "react";

const useStyles = makeStyles({
  linkItem: {
    position: "relative",
    padding: "1px",
  },
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
    background: "#056162",
    padding: "3px",
    borderRadius: "5px",
    display: "flex",
    flexDirection: "column",
  },
  innerLinkContainer: {
    display: "flex",
    backgroundColor: "#065051",
  },
  linkIcon: {
    position: "relative",
    fontSize: "90px",
    backgroundColor: "#1e2429",
    zIndex: 20,
  },
  textContainer: {
    height: "90px",
    overflow: "hidden",
    textOverflow: "ellipsis",
    padding: "4px",
    wordBreak: "break-all",
  },
  link: {
    wordBreak: "break-all",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  triangle: {
    width: 0,
    height: 0,
    borderTop: "4px solid transparent",
    borderRight: "16px solid #056162",
    borderBottom: "10px solid transparent",
    position: "absolute",
    top: "3.9px",
    left: "36px",
    transform: "rotate(15deg)",
  },
  typography: {
    fontWeight: 100,
  },
  urlContainer: {
    height: "20px",
    overflow: "hidden",
    textOverflow: "ellipsis",
    wordBreak: "normal",
  },
});

const LinkItem = ({ url }) => {
  const classes = useStyles();
  return (
    <Box className={classes.linkItem}>
      <Box className={classes.triangle}></Box>
      <Box className={classes.container}>
        <Box className={classes.iconContainer}>
          <Checkbox className={classes.icon}></Checkbox>
        </Box>
        <Box className={classes.linkContainer}>
          <Box className={classes.innerLinkContainer}>
            <LinkIcon className={classes.linkIcon}></LinkIcon>
            <Box className={classes.textContainer}>
              <Typography className={classes.typography} variant="subtitle2">
                {url}
              </Typography>
            </Box>
          </Box>
          <Box className={classes.urlContainer}>
            <a className={classes.link} target="_blank" href={url} rel="noopener noreferrer">
              {url}
            </a>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default LinkItem;
