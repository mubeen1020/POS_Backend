const express = require('express');
const paymentstatusrouter = express.Router();
const paymentStatusController = require('../controllers/paymentstatusController');

paymentstatusrouter.post('/payment-status', paymentStatusController.createPaymentStatus);
paymentstatusrouter.get('/payment-status', paymentStatusController.getAllPaymentStatus);

module.exports = paymentstatusrouter;
