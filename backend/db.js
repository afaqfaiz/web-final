const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://aafaqahmadcs:AAh37ITU*343@afaqfaiz.3xye3.mongodb.net/?retryWrites=true&w=majority&appName=afaqfaiz",
      
      { useNewUrlParser: true, useUnifiedTopology: true }
    );
    console.log('MongoDB Atlas connected successfully!');
  } catch (error) {
    console.error('Error connecting to MongoDB Atlas:', error);
    process.exit(1);
  }
};

module.exports = connectDB;