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
  return (
    <div className="container mx-auto mt-5">
      <h2 className="text-3xl font-bold mb-6">Edit Contact</h2>
      <form onSubmit={handleSubmit} className="space-y-4 bg-white shadow-md rounded p-6">
        <div>
          <label className="block text-base font-medium text-gray-700">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-base"
          />
        </div>
        <div>
          <label className="block text-base font-medium text-gray-700">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-base"
          />
        </div>
        <div>
          <label className="block text-base font-medium text-gray-700">Phone</label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-base"
          />
        </div>
        <button
          type="submit"
          className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};
export default EditContact;