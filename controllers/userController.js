const User = require('../models/user');
const jwt = require('jsonwebtoken');

const validator = require('validator');
const secretKey = 'your_secret_key';

exports.signup = (req, res) => {
  const { username, email, password } = req.body;

  
  if (validator.isEmpty(username) || validator.isEmpty(email) || validator.isEmpty(password)) {
    return res.status(400).json({ message: "Please enter all fields" });
  }

  if (!validator.isEmail(email)) {
    return res.status(400).json({ message: "Please enter a valid email" });
  }

  if (!validator.isStrongPassword(password)) {
    return res.status(400).json({ message: "Please enter a strong password" });
  }

  const newUser = new User({
    username,
    email,
    password,
  });

  User.create(newUser, (error, user) => {
    if (error) {
      return res.status(500).json({
        message: 'An error occurred while creating a new user.',
        error,
      });
    }
    res.json({
      message: 'User created successfully!',
      user,
    });
  });
};





exports.login = (req, res) => {
    const { email, password } = req.body;
  
    User.findByEmail(email, (error, user) => {
      if (error) {
        return res.status(500).json({
          message: 'An error occurred while retrieving the user.',
          error,
        });
      }
      if (!user) {
        return res.status(404).json({
          message: 'User not found.',
        });
      }
      if (user.password !== password) {
        return res.status(401).json({
          message: 'Invalid password.',
        });
      }
  
      // User is authenticated, generate a JWT
      const token = jwt.sign({ userId: user.id }, secretKey, { expiresIn: '1h' });
  
      res.json({
        message: 'Login successful!',
        token,
        user,
      });
    });
  };
