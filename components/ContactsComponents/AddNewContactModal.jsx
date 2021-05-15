import { Container, makeStyles, Modal } from "@material-ui/core";
import React, { useState } from "react";
import { db } from "../../firebase";
import { Form, FormButton, FormContainer, FormInput, FormTitle } from "../Form";

const useStyles = makeStyles({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

const AddNewContactModal = ({ isOpen, close, user }) => {
  const [email, setEmail] = useState("");
  const classes = useStyles();

  const onSubmit = (e) => {
    e.preventDefault();
    db.collection("users")
      .doc(email)
      .get()
      .then(async (doc) => {
        if (doc.exists) {
          await db
            .collection("contacts")
            .doc(user.user.email)
            .update({
              contacts: [...user.contacts, { ...doc.data() }],
            })
            .then(() => {
              console.log("Document successfully updated!");
            })
            .catch((error) => {
              // The document probably doesn't exist.
              console.error("Error updating document: ", error);
            });

          close();
        } else {
          console.log("doc does not exist");
        }
      });
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
