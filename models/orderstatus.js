const connection = require('../db');

class OrderStatus {
  constructor(orderStatus) {
    this.status = orderStatus.status;
  }

  static create(newOrderStatus, result) {
    connection.query('INSERT INTO order_status SET ?', newOrderStatus, (error, res) => {
      if (error) {
        console.error('Error creating a new order status:', error);
        result(error, null);
        return;
      }
      console.log('Created a new order status:', { id: res.insertId, ...newOrderStatus });
      result(null, { id: res.insertId, ...newOrderStatus });
    });
  }

  static getAll(result) {
    connection.query('SELECT * FROM order_status', (error, res) => {
      if (error) {
        console.error('Error retrieving order status:', error);
        result(error, null);
        return;
      }
      console.log('Retrieved order status:', res);
      result(null, res);
    });
  }
}

module.exports = OrderStatus;
