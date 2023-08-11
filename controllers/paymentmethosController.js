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

exports.updatePaymentMethods = (req, res) => {
  const PaymentMethodsId = req.params.id;
  const updatedPaymentMethods = req.body;
  const query = 'UPDATE payment_methods SET ? WHERE id = ?'; // Assuming 'packets' is the correct table name

  connection.query(query, [updatedPaymentMethods, PaymentMethodsId], (error, result) => {
    if (error) {
      return res.status(500).json({
        message: 'An error occurred while updating the PaymentMethods.',
        error,
      });
    }

    res.json({
      message: 'PaymentMethods updated successfully!',
      updatedPaymentMethods,
    });
  });
};


exports.deletePaymentMethods = (req, res) => {
  const PaymentMethodsId = req.params.id;

  const deleteQuery = 'DELETE FROM payment_methods WHERE id = ?';

  connection.query(deleteQuery, [PaymentMethodsId], (error, result) => {
    if (error) {
      return res.status(500).json({
        message: 'An error occurred while deleting the PaymentMethods.',
        error,
      });
    }

    res.json({
      message: 'PaymentMethods deleted successfully!',
      result,
    });
  });
};
