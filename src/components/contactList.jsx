import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import ContactContext from '../context/contactContext';
const ContactList = ({ contacts }) => {
    const { deleteContact } = useContext(ContactContext);
    const navigate = useNavigate();
  
    const handleDelete = (id) => {
      deleteContact(id);
    };


    
}
