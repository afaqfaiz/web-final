const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Task = require('../models/task');
const router = express.Router();
const dotenv = require('dotenv');

dotenv.config();

// Register a new user
router.post('/store', async (req, res) => {
  const { title, description, date } = req.body;

  console.log(title);
  console.log(description);
  console.log(date);

  
  try {
    // Check if user already exists
    // const existingUser = await User.findOne({ email });
    // if (existingUser) return res.status(400).json({ message: 'User already exists' });

    // Hash the password before saving
    // const hashedPassword = await bcrypt.hash(password, 10);
    
    // Create a new user
    const newTask = new Task({
      title,
      description,
      date,
    });

    // Save the user to the database
    await newTask.save();
    res.status(201).json({ message: 'task added successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error adding task', error: error.message });
  }
});

module.exports = router;
