// src/Login.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/Login', {
        email,
        password
      });
      navigate('/home');
      setMessage(response.data.message);
      // Handle successful login (e.g., store token, redirect)
      console.log(response.data);

    } catch (err) {
      setError('Login failed. Please check your credentials and try again.');
    }
  };

  return (

   <div>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {message && <p style={{ color: 'pink' }}>{message}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
