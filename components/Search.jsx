import { Box, makeStyles } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import React from "react";

const useStyles = makeStyles({
  container: {
    padding: "10px 0",
    borderBottom: "1px solid whitesmoke",
  },
  search: {
    display: "flex",
    alignItems: "center",
    margin: "0 20px",
    borderRadius: "15px",
    padding: "5px",
    backgroundColor: "#242d32",
  },
  icon: {
    marginRight: "25px",
  },
  input: {
    padding: "5px 0",
    border: "none",
    outline: "none",
    backgroundColor: "transparent",
    color: "white",
  },
});

const Search = (props) => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Box className={classes.search}>
        <SearchIcon className={classes.icon} />
        <input className={classes.input} placeholder="Search in chats" />
      </Box>
    </Box>
  );
};

export default Search;
