const connection = require('../db');

const User = function (user) {
  this.username = user.username;
  this.email = user.email;
  this.password = user.password;
};

User.create = (newUser, result) => {
  connection.query('INSERT INTO users SET ?', newUser, (error, res) => {
    if (error) {
      console.error('Error creating a new user:', error);
      result(error, null);
      return;
    }
    console.log('Created a new user:', { id: res.insertId, ...newUser });
    result(null, { id: res.insertId, ...newUser });
  });
};

User.findByEmail = (email, result) => {
  connection.query('SELECT * FROM users WHERE email = ?', email, (error, res) => {
    if (error) {
      console.error('Error retrieving the user:', error);
      result(error, null);
      return;
    }
    if (res.length) {
      console.log('Found user:', res[0]);
      result(null, res[0]);
      return;
    }
    // User not found
    result(null, null);
  });
};

module.exports = User;
