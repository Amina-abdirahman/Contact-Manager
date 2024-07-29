import axios from 'axios';

const API_URL = '/api';

export const fetchContacts = async () => {
  try {
    const response = await axios.get(`${API_URL}/contacts`);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch contacts:', error);
  }
};