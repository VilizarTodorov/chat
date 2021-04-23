import { List } from "@material-ui/core";
import React from "react";
import Person from "./Person";
import styles from "../styles/ListOfPeople.module.css";

const ListOfPeople = (props) => {
  return (
    <List className={styles.list}>
      {props.list.map((friend) => (
        <Person key={friend} recipient={`test${friend}`}></Person>
      ))}
    </List>
  );
};

export default ListOfPeople;
