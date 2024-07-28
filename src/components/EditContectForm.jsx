import React, { useContext, useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ContactContext from '../context/contactContext';

const EditContact = () => {
  const { contacts, updateContact } = useContext(ContactContext);
  const { id } = useParams();
  const navigate = useNavigate();

  const contact = contacts.find(contact => contact.id === id);

  const [name, setName] = useState(contact?.name || '');
  const [email, setEmail] = useState(contact?.email || '');
  const [phone, setPhone] = useState(contact?.phone || '');

  useEffect(() => {
    if (!contact) {
      navigate('/dashboard');
    }
  }, [contact, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateContact({ id, name, email, phone });
    navigate('/dashboard');
  };
  return
  
}