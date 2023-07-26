const Payment = require('../models/payment');
const connection = require('../db'); 

exports.createPayment = (req, res) => {
  const { customer_id, payment_date, payment_amount, payment_method, receiving_staff, receiving_account, payment_balance, payment_tip, tip_for_rider } = req.body;

  const newPayment = new Payment({
    customer_id,
    payment_date,
    payment_amount,
    payment_method,
    receiving_staff,
    receiving_account,
    payment_balance,
    payment_tip,
    tip_for_rider
  });

  Payment.create(newPayment, (error, payment) => {
    if (error) {
      return res.status(500).json({
        message: 'An error occurred while creating a new payment.',
        error
      });
    }
    res.json({
      message: 'Payment created successfully!',
      payment
    });
  });
};

exports.getAllPayments = (req, res) => {
  Payment.getAll((error, payments) => {
    if (error) {
      return res.status(500).json({
        message: 'An error occurred while retrieving payments.',
        error
      });
    }
    res.json({
      message: 'Retrieved payments successfully!',
      payments
    });
  });
};
