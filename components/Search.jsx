import { Box, debounce, makeStyles } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import React, { useCallback, useState } from "react";
import ClearIcon from "@material-ui/icons/Clear";

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
    flex: 1,
  },
  clear: {
    marginLeft: "auto",
    opacity: 0,
    transform: "scale(0)",
    transition: "all 0.35s",
    cursor: "pointer",
  },
  clearActive: {
    transform: "scale(1)",
    opacity: 1,
  },
});

const Search = ({ setList, initialList, searchFunction }) => {
  const [searchValue, setSearchValue] = useState("");

  const debouncedFen = useCallback(
    debounce((searchValue, setList, initialList) => searchFunction(searchValue, setList, initialList), 150),
    [] // will be created only once initially
  );

  const onChange = (e) => {
    setSearchValue(e.target.value);
    debouncedFen(e.target.value, setList, initialList);
  };

  const onClick = () => {
    setSearchValue("");
    debouncedFen("", setList, initialList);
  };

  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Box className={classes.search}>
        <SearchIcon className={classes.icon} />
        <input value={searchValue} onChange={onChange} className={classes.input} placeholder="Search in chats" />
        <ClearIcon onClick={onClick} className={`${classes.clear} ${searchValue && classes.clearActive}`}></ClearIcon>
      </Box>
    </Box>
  );
};

export default Search;
