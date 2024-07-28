import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ContactContext from '../context/contactContext';

const AddContact = () => {
  const { addContact } = useContext(ContactContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    addContact({ name, email, phone });
    navigate('/dashboard');
  };

  return
}