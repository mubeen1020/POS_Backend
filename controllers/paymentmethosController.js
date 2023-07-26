const PaymentMethod = require('../models/paymentmethod');
const connection = require('../db'); 

exports.createPaymentMethod = (req, res) => {
  const newPaymentMethod = new PaymentMethod(req.body);

  PaymentMethod.create(newPaymentMethod, (error, paymentMethod) => {
    if (error) {
      return res.status(500).json({
        message: 'An error occurred while creating a new payment method.',
        error,
      });
    }
    res.json({
      message: 'Payment method created successfully!',
      paymentMethod,
    });
  });
};

exports.getAllPaymentMethods = (req, res) => {
  PaymentMethod.getAll((error, paymentMethods) => {
    if (error) {
      return res.status(500).json({
        message: 'An error occurred while retrieving payment methods.',
        error,
      });
    }
    res.json({
      message: 'Retrieved payment methods successfully!',
      paymentMethods,
    });
  });
};
