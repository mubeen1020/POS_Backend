const connection = require('../db');

class PaymentStatus {
  constructor(paymentStatus) {
    this.status = paymentStatus.status;
  }

  static create(newPaymentStatus, result) {
    connection.query('INSERT INTO payment_status SET ?', newPaymentStatus, (error, res) => {
      if (error) {
        console.error('Error creating a new payment status:', error);
        result(error, null);
        return;
      }
      console.log('Created a new payment status:', { id: res.insertId, ...newPaymentStatus });
      result(null, { id: res.insertId, ...newPaymentStatus });
    });
  }

  static getAll(result) {
    connection.query('SELECT * FROM payment_status', (error, res) => {
      if (error) {
        console.error('Error retrieving payment status:', error);
        result(error, null);
        return;
      }
      console.log('Retrieved payment status:', res);
      result(null, res);
    });
  }
}

module.exports = PaymentStatus;
