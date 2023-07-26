const connection = require('../db');

class PaymentMethod {
  constructor(paymentMethod) {
    this.method = paymentMethod.method;
  }

  static create(newPaymentMethod, result) {
    connection.query('INSERT INTO payment_methods SET ?', newPaymentMethod, (error, res) => {
      if (error) {
        console.error('Error creating a new payment method:', error);
        result(error, null);
        return;
      }
      console.log('Created a new payment method:', { id: res.insertId, ...newPaymentMethod });
      result(null, { id: res.insertId, ...newPaymentMethod });
    });
  }

  static getAll(result) {
    connection.query('SELECT * FROM payment_methods', (error, res) => {
      if (error) {
        console.error('Error retrieving payment methods:', error);
        result(error, null);
        return;
      }
      console.log('Retrieved payment methods:', res);
      result(null, res);
    });
  }
}

module.exports = PaymentMethod;
