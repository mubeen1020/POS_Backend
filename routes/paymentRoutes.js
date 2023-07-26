const express = require('express');
const paymentController = require('../controllers/paymentController');

const paymentRouter = express.Router();

paymentRouter.post('/payments', paymentController.createPayment);
paymentRouter.get('/payments', paymentController.getAllPayments);

module.exports = paymentRouter;
