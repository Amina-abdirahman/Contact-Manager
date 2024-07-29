import React, { createContext, useState, useEffect } from 'react';

const ContactContext = createContext();

export const ContactProvider = ({ children }) => {
  const [contacts, setContacts] = useState(() => {
    // Retrieve contacts from local storage if available
    const localData = localStorage.getItem('contacts');
    return localData ? JSON.parse(localData) : [];
  });
  useEffect(() => {
    // Store contacts in local storage whenever they change
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (contact) => {
    setContacts([...contacts, { ...contact, id: Date.now().toString() }]);
  };

  const updateContact = (updatedContact) => {
    setContacts(contacts.map(contact => 
      contact.id === updatedContact.id ? updatedContact : contact
    ));
  };

}