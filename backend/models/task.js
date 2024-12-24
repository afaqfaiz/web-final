const mongoose = require('mongoose');

// User Schema
const taskSchema = new mongoose.Schema({
  title: { type: String, required: true, unique: true },
  description: { type: String, required: true, unique: true },
  date: { type: Date, required: true },
  done_status:{type: String, default:false }
  
//   createdAt: { type: Date, default: Date.now }
});

// User model
const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
