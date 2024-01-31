const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const cors = require('cors'); // Import cors module

const app = express();
const PORT = 3000;

// Use cors middleware
app.use(cors());

// Use body-parser middleware
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/staffsphere', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define a MongoDB model for users
const User = mongoose.model('User', {
  username: String,
  password: String,
});

// Register endpoint
app.post('/register', async (req, res) => {
  const { username, password } = req.body;

  // Check if the user already exists
  const existingUser = await User.findOne({ username });
  if (existingUser) {
    return res.status(400).json({ error: 'User already exists' });
  }

  // Create a new user
  const newUser = new User({ username, password });
  await newUser.save();

  // Generate a JWT token for the new user
  const token = jwt.sign({ username }, 'your-secret-key');

  // Respond with the token
  res.json({ token });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
