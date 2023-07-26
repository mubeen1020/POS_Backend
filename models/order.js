const connection = require('../db');
const OrderStatus = require('./orderstatus');
const PaymentStatus = require('./paymentstatus');

class Order {
  constructor(order) {
    this.customer = order.customer;
    this.orderDate = order.orderDate;
    this.deliveryDeadline = order.deliveryDeadline;
    this.orderStatus = order.orderStatus;
    this.deliveryCharges = order.deliveryCharges;
    this.urgentDelivery = order.urgentDelivery;
    this.orderTotal = order.orderTotal;
    this.paymentStatus = order.paymentStatus;
  }

  static create(newOrder, result) {
    connection.query('INSERT INTO orders SET ?', newOrder, (error, res) => {
      if (error) {
        console.error('Error creating a new order:', error);
        result(error, null);
        return;
      }
      console.log('Created a new order:', { id: res.insertId, ...newOrder });
      result(null, { id: res.insertId, ...newOrder });
    });
  }

  static getAll(result) {
    connection.query('SELECT * FROM orders', (error, res) => {
      if (error) {
        console.error('Error retrieving orders:', error);
        result(error, null);
        return;
      }
      console.log('Retrieved orders:', res);
      result(null, res);
    });
  }

  static getOrderStatus(orderId, result) {
    connection.query(
      'SELECT * FROM order_status WHERE id = (SELECT orderStatus FROM orders WHERE id = ?)',
      orderId,
      (error, res) => {
        if (error) {
          console.error('Error retrieving order status:', error);
          result(error, null);
          return;
        }
        console.log('Retrieved order status:', res);
        result(null, res[0]);
      }
    );
  }

  static getPaymentStatus(orderId, result) {
    connection.query(
      'SELECT * FROM payment_status WHERE id = (SELECT paymentStatus FROM orders WHERE id = ?)',
      orderId,
      (error, res) => {
        if (error) {
          console.error('Error retrieving payment status:', error);
          result(error, null);
          return;
        }
        console.log('Retrieved payment status:', res);
        result(null, res[0]);
      }
    );
  }
}

module.exports = Order;
