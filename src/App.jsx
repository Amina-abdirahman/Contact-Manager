import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import About from './pages/About';
import ContactPage from './pages/ContactPage';
import LoginPage from './pages/LoginPage';
import ContactManager from './pages/ContactManager';
 // Corrected spelling if necessary
import { ContactProvider } from './context/contactContext';
import AddContact from './components/AddContactForm';
import EditContact from './components/EditContectForm';

function App() {
  return (
    <Router>
      <ContactProvider>
       
        <Routes>
          <Route path='/' element={<LoginPage />} />
          <Route path='/home' element={<HomePage />} />
          <Route path='/about' element={<About />} />
          <Route path='/dashboard' element={<ContactManager />} />
          <Route path='/add' element={<AddContact />} />
          <Route path='/edit/:id' element={<EditContact />} />
          <Route path='/contactus' element={<ContactPage />} />
          {/* Add other routes here */}
        </Routes>
      </ContactProvider>
    </Router>
  );
}

export default App;
