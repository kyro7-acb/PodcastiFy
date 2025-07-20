// Import required modules
const express = require('express');
const cors = require('cors');
require('dotenv').config();

// Create an Express app
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Test route
app.get('/healthcheck', (req, res) => {
  res.status(200).json({ message: 'hello world' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
