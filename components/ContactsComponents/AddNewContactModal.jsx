import { Container, makeStyles, Modal } from "@material-ui/core";
import React, { useState } from "react";
import { addContact } from "../../firebase/functions";
import { Form, FormButton, FormContainer, FormInput, FormTitle } from "../Form";

const useStyles = makeStyles({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

const AddNewContactModal = ({ isOpen, close, userEmail, contacts }) => {
  const [email, setEmail] = useState("");
  const classes = useStyles();

  const onSubmit = (e) => {
    e.preventDefault();

    addContact(email, userEmail, contacts)
      .then((x) => {
        setEmail("");
        close();
      })
      .catch((err) => console.log(err));
  };

  return (
    <Modal className={classes.container} open={isOpen} onClose={close}>
      <Container>
        <FormContainer>
          <Form onSubmit={onSubmit}>
            <FormTitle>Add new contact</FormTitle>
            <FormInput
              id="email"
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Contact Email"
              required={true}
              autoFocus={true}
              label="Contact Email"
            ></FormInput>
            <FormButton>Add contact</FormButton>
          </Form>
        </FormContainer>
      </Container>
    </Modal>
  );
};

export default AddNewContactModal;
