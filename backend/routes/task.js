const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Task = require('../models/task');
const router = express.Router();
const dotenv = require('dotenv');
const connectDB = require('../db');
const db = connectDB;

dotenv.config();

// Register a new user
router.post('/store', async (req, res) => {
  const { title, description, date} = req.body;

  console.log(title);
  console.log(description);
  console.log(date);


  
  try {
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

//http://localhost:5000/api/task/alltask

router.get('/alltask', async (req, res) => {
    console.log("hhh");
    try {
        const fulldata = await Task.find();
  
      // Save the user to the database
      res.status(201).json(fulldata);
    } catch (error) {
      res.status(500).json({ message: 'Error finding  task', error: error.message });
    }
  });

module.exports = router;
