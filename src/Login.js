// src/Login.js
import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://your-api-endpoint/login', {
        email,
        password
      });
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
          <label>        -           Email:      </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>         -          Password:     </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">   Enter   </button>
      </form>
    </div>
  );
};

export default Login;
