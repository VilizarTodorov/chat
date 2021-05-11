import { Box, Container, FormControl, Input, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  root: {
    padding: 0,
  },
});

const FormInput = ({ id, name, type, value, onChange, placeholder, required, autoFocus, label }) => {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <Box component="span">{label}</Box>
      <FormControl margin="normal" fullWidth>
        <Input
          id={id}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          autoFocus={autoFocus}
          // className={`${styles.infoInput} ${styles[`MuiInput-underline`]} ${styles.active}`}
        ></Input>
      </FormControl>
    </Container>
  );
};

export default FormInput;
