const express = require('express');
const customerrouter = express.Router();
const customerController = require('../controllers/customerController');
const connection = require('../db');

customerrouter.post('/customers', customerController.createCustomer);
customerrouter.get('/customers/:phone', customerController.getCustomerByPhone);
customerrouter.put('/customers/:id', customerController.updateCustomer);
customerrouter.delete('/customers/:id', customerController.deleteCustomer);

module.exports = customerrouter;
