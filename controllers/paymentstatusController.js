const PaymentStatus = require('../models/paymentstatus');
const connection = require('../db'); 

exports.createPaymentStatus = (req, res) => {
  const newPaymentStatus = new PaymentStatus(req.body);

  PaymentStatus.create(newPaymentStatus, (error, paymentStatus) => {
    if (error) {
      return res.status(500).json({
        message: 'An error occurred while creating a new payment status.',
        error,
      });
    }
    res.status(201).json({
      message: 'Payment status created successfully!',
      paymentStatus,
    });
  });
};

exports.getAllPaymentStatus = (req, res) => {
  PaymentStatus.getAll((error, paymentStatus) => {
    if (error) {
      return res.status(500).json({
        message: 'An error occurred while retrieving payment status.',
        error,
      });
    }
    res.status(200).json({
      message: 'Retrieved payment status successfully!',
      paymentStatus,
    });
  });
};
