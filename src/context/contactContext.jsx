import React, { createContext, useState, useEffect } from 'react';

const ContactContext = createContext();

export const ContactProvider = ({ children }) => {
  const [contacts, setContacts] = useState(() => {
    // Retrieve contacts from local storage if available
    const localData = localStorage.getItem('contacts');
    return localData ? JSON.parse(localData) : [];
  });

}