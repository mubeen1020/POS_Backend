const express = require('express');
const paymentmethodrouter = express.Router();
const paymentMethodController = require('../controllers/paymentmethosController');


paymentmethodrouter.post('/payment-methods', paymentMethodController.createPaymentMethod);
paymentmethodrouter.get('/payment-methods', paymentMethodController.getAllPaymentMethods);

module.exports = paymentmethodrouter;
