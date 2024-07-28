import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (event) => {
        event.preventDefault();
        if (username === "admin" && password === "password123") {
            navigate('/Home'); // Navigate to the Home page if credentials match
        } else {
            alert('Invalid credentials! Please try again.'); // Alert if credentials do not match
        }
    };
    
    return
}
