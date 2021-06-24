import React, { useState } from "react";
import { addContact } from "../../firebase/functions";
import BaseModal from "../BaseComponents/BaseModal";
import { Form, FormButton, FormContainer, FormInput, FormTitle } from "../Form";

const AddNewContactModal = ({ isOpen, close, userEmail, contacts }) => {
  const [email, setEmail] = useState("");

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
    <BaseModal isOpen={isOpen} close={close}>
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
    </BaseModal>
  );
};

export default AddNewContactModal;
