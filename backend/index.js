// backend/index.js
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware to parse JSON bodies
app.use(express.json());

// Enable CORS for all routes
app.use(cors());

// Dummy users for demonstration
const users = [
  { email: 'gavinrutherford8@gmail.com', password: 'fuck' },
  {email:'nyrangersfan18@gmail.com',password:'ass'},
  { email: 'abbirutherford@gmail.com', password: 'bitch' },
  { email: 'yousk@gmail.com', password: 'cunt' },
  { email: 'jahquizle@gmail.com', password: 'mcaasshole' }// In a real application, passwords should be hashed
];

// Login route
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  const user = users.find(u => u.email === email && u.password === password);

  if (user) {
    res.json({ message: 'Login successful :)', token: 'fake-jwt-token' });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
