const Order = require('../models/order');
const connection = require('../db'); 

exports.createOrder = (req, res) => {
  const newOrder = new Order(req.body);

  Order.create(newOrder, (error, order) => {
    if (error) {
      return res.status(500).json({
        message: 'An error occurred while creating a new order.',
        error,
      });
    }
    res.status(201).json({
      message: 'Order created successfully!',
      order,
    });
  });
};

exports.getAllOrders = (req, res) => {
  Order.getAll((error, orders) => {
    if (error) {
      return res.status(500).json({
        message: 'An error occurred while retrieving orders.',
        error,
      });
    }
    res.status(200).json({
      message: 'Retrieved orders successfully!',
      orders,
    });
  });
};

exports.getOrderStatus = (req, res) => {
  const orderId = req.params.orderId;

  Order.getOrderStatus(orderId, (error, orderStatus) => {
    if (error) {
      return res.status(500).json({
        message: 'An error occurred while retrieving order status.',
        error,
      });
    }
    res.status(200).json({
      message: 'Retrieved order status successfully!',
      orderStatus,
    });
  });
};

exports.getPaymentStatus = (req, res) => {
  const orderId = req.params.orderId;

  Order.getPaymentStatus(orderId, (error, paymentStatus) => {
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

exports.updateOrder = (req, res) => {
    const orderId = req.params.orderId;
    const updatedOrder = req.body;
  
    const query = 'UPDATE orders SET ? WHERE id = ?';
    connection.query(query, [updatedOrder, orderId], (error, results) => {
      if (error) {
        return res.status(500).json({
          message: 'An error occurred while updating the order.',
          error,
        });
      }
      res.status(200).json({
        message: 'Order updated successfully!',
        affectedRows: results.affectedRows,
      });
    });
  };
  
  exports.deleteOrder = (req, res) => {
    const orderId = req.params.orderId;
  
    const query = 'DELETE FROM orders WHERE id = ?';
    connection.query(query, orderId, (error, results) => {
      if (error) {
        return res.status(500).json({
          message: 'An error occurred while deleting the order.',
          error,
        });
      }
      res.status(200).json({
        message: 'Order deleted successfully!',
        affectedRows: results.affectedRows,
      });
    });
  };