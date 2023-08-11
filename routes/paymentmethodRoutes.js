const express = require('express');
const paymentmethodrouter = express.Router();
const paymentMethodController = require('../controllers/paymentmethosController');


paymentmethodrouter.post('/payment-methods', paymentMethodController.createPaymentMethod);
paymentmethodrouter.get('/payment-methods', paymentMethodController.getAllPaymentMethods);
paymentmethodrouter.put('/payment-methods/:id', paymentMethodController.updatePaymentMethods);
paymentmethodrouter.delete('/payment-methods/:id', paymentMethodController.deletePaymentMethods);

module.exports = paymentmethodrouter;
