import { Box, Container, FormControl, FormHelperText, Input, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  root: {
    padding: 0,
  },
});

const FormInput = ({
  id,
  name,
  type,
  value,
  onChange,
  placeholder,
  required,
  autoFocus,
  label,
  hasError,
  errorMessage,
}) => {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <Box component="span">{label}</Box>
      <FormControl error={hasError} margin="normal" fullWidth>
        <Input
          id={id}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          autoFocus={autoFocus}
        ></Input>
        <FormHelperText>{errorMessage}</FormHelperText>
      </FormControl>
    </Container>
  );
};

export default FormInput;
