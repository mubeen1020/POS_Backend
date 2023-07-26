const connection = require('../db');

const Customer = function (customer) {
  this.name = customer.name;
  this.c_o = customer.c_o;
  this.phone1 = customer.phone1;
  this.phone2 = customer.phone2;
  this.phone3 = customer.phone3;
  this.address = customer.address;
  this.area = customer.area;
  this.pinLocation = customer.pinLocation;
  this.distance = customer.distance;
  this.deliveryCharges = customer.deliveryCharges;
};

Customer.create = (newCustomer, result) => {
  connection.query('INSERT INTO customers SET ?', newCustomer, (error, res) => {
    if (error) {
      console.error('Error creating a new customer:', error);
      result(error, null);
      return;
    }
    console.log('Created a new customer:', { id: res.insertId, ...newCustomer });
    result(null, { id: res.insertId, ...newCustomer });
  });
};

Customer.findByPhone = (phone, result) => {
  connection.query('SELECT * FROM customers WHERE phone1 = ? OR phone2 = ? OR phone3 = ?', [phone, phone, phone], (error, res) => {
    if (error) {
      console.error('Error retrieving the customer:', error);
      result(error, null);
      return;
    }
    if (res.length) {
      console.log('Found customer:', res[0]);
      result(null, res[0]);
      return;
    }
    // Customer not found
    result(null, null);
  });
};

module.exports = Customer;
