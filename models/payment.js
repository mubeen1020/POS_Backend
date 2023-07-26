const connection = require('../db');
const Customer = require('./customer');
const PaymentMethod = require('./paymentmethod');

class Payment {
  constructor(payment) {
    this.customer_id = payment.customer_id;
    this.payment_date = payment.payment_date;
    this.payment_amount = payment.payment_amount;
    this.payment_method = payment.payment_method;
    this.receiving_staff = payment.receiving_staff;
    this.receiving_account = payment.receiving_account;
    this.payment_balance = payment.payment_balance;
    this.payment_tip = payment.payment_tip;
    this.tip_for_rider = payment.tip_for_rider;
  }

  static create(newPayment, result) {
    connection.query('INSERT INTO payments SET ?', newPayment, (error, res) => {
      if (error) {
        console.error('Error creating a new payment:', error);
        result(error, null);
        return;
      }
      console.log('Created a new payment:', { id: res.insertId, ...newPayment });
      result(null, { id: res.insertId, ...newPayment });
    });
  }

  static getAll(result) {
    connection.query('SELECT * FROM payments', (error, res) => {
      if (error) {
        console.error('Error retrieving payments:', error);
        result(error, null);
        return;
      }
      console.log('Retrieved payments:', res);
      result(null, res);
    });
  }

  getCustomer(result) {
    Customer.findById(this.customer_id, (error, customer) => {
      if (error) {
        console.error('Error retrieving the associated customer:', error);
        result(error, null);
        return;
      }
      result(null, customer);
    });
  }

  getPaymentMethod(result) {
    PaymentMethod.findById(this.payment_method, (error, paymentMethod) => {
      if (error) {
        console.error('Error retrieving the associated payment method:', error);
        result(error, null);
        return;
      }
      result(null, paymentMethod);
    });
  }
}

module.exports = Payment;
