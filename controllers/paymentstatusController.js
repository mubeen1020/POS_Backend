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

exports.updatePaymentStatus = (req, res) => {
  const PaymentStatusId = req.params.id;
  const updatedPaymentStatus = req.body;
  const query = 'UPDATE payment_status SET ? WHERE id = ?'; // Assuming 'packets' is the correct table name

  connection.query(query, [updatedPaymentStatus, PaymentStatusId], (error, result) => {
    if (error) {
      return res.status(500).json({
        message: 'An error occurred while updating the PaymentStatus.',
        error,
      });
    }

    res.json({
      message: 'PaymentStatus updated successfully!',
      updatedPaymentStatus,
    });
  });
};


exports.deletePaymentStatus = (req, res) => {
  const PaymentStatusId = req.params.id;

  const deleteQuery = 'DELETE FROM payment_status WHERE id = ?';

  connection.query(deleteQuery, [PaymentStatusId], (error, result) => {
    if (error) {
      return res.status(500).json({
        message: 'An error occurred while deleting the PaymentStatus.',
        error,
      });
    }

    res.json({
      message: 'PaymentStatus deleted successfully!',
      result,
    });
  });
};

