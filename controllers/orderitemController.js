const OrderItem = require('../models/orderitem');
const connection = require('../db'); 

exports.createOrderItem = (req, res) => {
  const newOrderItem = new OrderItem(req.body);

  OrderItem.create(newOrderItem, (error, orderItem) => {
    if (error) {
      return res.status(500).json({
        message: 'An error occurred while creating a new order item.',
        error,
      });
    }
    res.json({
      message: 'Order item created successfully!',
      orderItem,
    });
  });
};

exports.getAllOrderItems = (req, res) => {
  OrderItem.getAll((error, orderItems) => {
    if (error) {
      return res.status(500).json({
        message: 'An error occurred while retrieving order items.',
        error,
      });
    }
    res.json({
      message: 'Retrieved order items successfully!',
      orderItems,
    });
  });
};

exports.updateOrderItem = (req, res) => {
    const orderItemId = req.params.orderItemId;
    const updatedOrderItem = req.body;
  
    const query = 'UPDATE order_item SET ? WHERE id = ?';
    connection.query(query, [updatedOrderItem, orderItemId], (error, results) => {
      if (error) {
        return res.status(500).json({
          message: 'An error occurred while updating the order item.',
          error,
        });
      }
      res.json({
        message: 'Order item updated successfully!',
        affectedRows: results.affectedRows,
      });
    });
  };
  
  exports.deleteOrderItem = (req, res) => {
    const orderItemId = req.params.orderItemId;
  
    const query = 'DELETE FROM order_item WHERE id = ?';
    connection.query(query, orderItemId, (error, results) => {
      if (error) {
        return res.status(500).json({
          message: 'An error occurred while deleting the order item.',
          error,
        });
      }
      res.json({
        message: 'Order item deleted successfully!',
        affectedRows: results.affectedRows,
      });
    });
  };