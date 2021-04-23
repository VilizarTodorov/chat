import React from "react";
import styles from "../styles/Search.module.css";
import SearchIcon from "@material-ui/icons/Search";

const Search = (props) => {
  return (
    <div className={styles.searchContainer}>
      <div className={styles.search}>
        <SearchIcon className={styles.searchIcon} />
        <input className={styles.searchInput} placeholder="Search in chats" />
      </div>
    </div>
  );
};

export default Search;
