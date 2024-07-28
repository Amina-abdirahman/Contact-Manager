import React, { useContext } from 'react';
import { ContactContext } from '../context/contactContext';

const ContactItem = ({ contact }) => {
  const { deleteContact } = useContext(ContactContext);

  return (
    <div>
      <h3>{contact.name}</h3>
      <p>Email: {contact.email}</p>
      <p>Phone: {contact.phone}</p>
      <button onClick={() => deleteContact(contact.id)}>Delete</button>
    </div>
  );
};

export default ContactItem;
