import List from "@material-ui/core/List";
import React from "react";
import styles from "../styles/ListOfPeople.module.css";

const ListOfPeople = ({ children }) => {
  return <List className={styles.list}>{children}</List>;
};

export default ListOfPeople;
