const express = require('express');
const paymentstatusrouter = express.Router();
const paymentStatusController = require('../controllers/paymentstatusController');

paymentstatusrouter.post('/payment-status', paymentStatusController.createPaymentStatus);
paymentstatusrouter.get('/payment-status', paymentStatusController.getAllPaymentStatus);
paymentstatusrouter.put('/payment-status/:id', paymentStatusController.updatePaymentStatus);
paymentstatusrouter.delete('/payment-status/:id', paymentStatusController.deletePaymentStatus);

module.exports = paymentstatusrouter;
