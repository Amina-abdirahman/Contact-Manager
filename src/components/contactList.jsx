import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import ContactContext from '../context/contactContext';
const ContactList = ({ contacts }) => {
    const { deleteContact } = useContext(ContactContext);
    const navigate = useNavigate();
  
    const handleDelete = (id) => {
      deleteContact(id);
    };

    return (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border">
            <thead>
              <tr>
                <th className="py-4 px-6 bg-gray-100 border-b text-left text-base font-medium text-gray-600 uppercase tracking-wider">Name</th>
                <th className="py-4 px-6 bg-gray-100 border-b text-left text-base font-medium text-gray-600 uppercase tracking-wider">Email</th>
                <th className="py-4 px-6 bg-gray-100 border-b text-left text-base font-medium text-gray-600 uppercase tracking-wider">Phone</th>
                <th className="py-4 px-6 bg-gray-100 border-b text-left text-base font-medium text-gray-600 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact) => (
                <tr key={contact.id} className="border-b hover:bg-gray-50">
                  <td className="py-4 px-6 text-base text-gray-700">{contact.name}</td>
                  <td className="py-4 px-6 text-base text-gray-700">{contact.email}</td>
                  <td className="py-4 px-6 text-base text-gray-700">{contact.phone}</td>
                  <td className="py-4 px-6 text-base text-gray-700 flex space-x-2">
                    <button
                      onClick={() => navigate(`/edit/${contact.id}`)}
                      className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 text-base"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(contact.id)}
                      className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 text-base"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    
}
export default ContactList;