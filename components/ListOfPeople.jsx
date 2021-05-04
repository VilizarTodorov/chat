import { List } from "@material-ui/core";
import React from "react";
import Person from "./Person";
import styles from "../styles/ListOfPeople.module.css";

const ListOfPeople = (props) => {
  return (
    <List className={styles.list}>
      {props.list.map((item) => (
        <Person
          key={`${item.email}${props.keyPrefix}`}
          function={() => props.function(item.email)}
          email={item.email}
          photoUrl={item.photo}
          message={`${props.message ? props.message : "Hi,I'm using chat!"}`}
        ></Person>
      ))}
    </List>
  );
};

export default ListOfPeople;
