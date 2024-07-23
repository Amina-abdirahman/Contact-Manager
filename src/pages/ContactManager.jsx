import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import ContactContext from '../context/contactContext';
import ContactList from '../components/contactList';
import Header from '../components/Header';
function ContactManager() {

    const { contacts } = useContext(ContactContext);
      const navigate = useNavigate();
    
      const handleAddContact = () => {
        navigate('/add');
      };
    
      return (
        <div>
          <Header />
          <div className="container mx-auto mt-5">
          <h2 className="text-3xl font-bold mb-6">Manage Your Contacts as safity</h2>
          <button
            onClick={handleAddContact}
            className="mb-6 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
          >
            Add Contact
          </button>
         
          <ContactList contacts={contacts} />
          
        </div>
        </div>
      );
    };
    
export default ContactManager;
