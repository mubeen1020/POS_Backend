const Customer = require('../models/customer');
const connection = require('../db'); 

exports.createCustomer = (req, res) => {
  const { name, c_o, phone1, phone2, phone3, address, area, pinLocation, distance, deliveryCharges } = req.body;

  const newCustomer = new Customer({
    name,
    c_o,
    phone1,
    phone2,
    phone3,
    address,
    area,
    pinLocation,
    distance,
    deliveryCharges,
  });

  Customer.create(newCustomer, (error, customer) => {
    if (error) {
      return res.status(500).json({
        message: 'An error occurred while creating a new customer.',
        error,
      });
    }
    res.json({
      message: 'Customer created successfully!',
      customer,
    });
  });
};

exports.getCustomerByPhone = (req, res) => {
  const phone = req.params.phone;

  Customer.findByPhone(phone, (error, customer) => {
    if (error) {
      return res.status(500).json({
        message: 'An error occurred while retrieving the customer.',
        error,
      });
    }
    if (!customer) {
      return res.status(404).json({
        message: 'Customer not found.',
      });
    }

    res.json({
      message: 'Customer found successfully!',
      customer,
    });
  });
};

exports.deleteCustomer = (req, res) => {
  const customerId = req.params.id;

  const deleteQuery = 'DELETE FROM customers WHERE id = ?';

  connection.query(deleteQuery, [customerId], (error, result) => {
    if (error) {
      return res.status(500).json({
        message: 'An error occurred while deleting the customer.',
        error,
      });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({
        message: 'Customer not found.',
      });
    }

    res.json({
      message: 'Customer deleted successfully!',
      customerId,
    });
  });
};

  
  exports.updateCustomer = (req, res) => {
    const customerId = req.params.id;
    const updatedCustomerData = req.body;
  
    connection.query('UPDATE customers SET ? WHERE id = ?', [updatedCustomerData, customerId], (error, result) => {
      if (error) {
        return res.status(500).json({
          message: 'An error occurred while updating the customer.',
          error,
        });
      }
      if (result.affectedRows === 0) {
        return res.status(404).json({
          message: 'Customer not found.',
        });
      }
      res.json({
        message: 'Customer updated successfully!',
        result,
      });
    });
  };
  
  
  