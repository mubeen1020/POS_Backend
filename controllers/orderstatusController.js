const OrderStatus = require('../models/orderstatus');
const connection = require('../db'); 

exports.createOrderStatus = (req, res) => {
  const newOrderStatus = new OrderStatus(req.body);

  OrderStatus.create(newOrderStatus, (error, orderStatus) => {
    if (error) {
      return res.status(500).json({
        message: 'An error occurred while creating a new order status.',
        error,
      });
    }
    res.status(201).json({
      message: 'Order status created successfully!',
      orderStatus,
    });
  });
};

exports.getAllOrderStatus = (req, res) => {
  OrderStatus.getAll((error, orderStatus) => {
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



  exports.deleteOrderStatus = (req, res) => {
    const orderStatusId = req.params.id;
  
    const deleteQuery = 'DELETE FROM order_status WHERE id = ?';
  
    connection.query(deleteQuery, [orderStatusId], (error, result) => {
      if (error) {
        return res.status(500).json({
          message: 'An error occurred while deleting the customer.',
          error,
        });
      }
  
      if (result.affectedRows === 0) {
        return res.status(404).json({
          message: 'Customer not found.',
        });
      }
  
      res.json({
        message: 'Customer deleted successfully!',
        customerId,
      });
    });
  };
  
    
    exports.updateOrderStatus = (req, res) => {
        const orderStatusId = req.params.orderStatusId;
        const updatedOrderStatus = req.body;
    
      connection.query('UPDATE order_status SET ? WHERE id = ?', [updatedOrderStatus, orderStatusId], (error, result) => {
        if (error) {
          return res.status(500).json({
            message: 'An error occurred while updating the customer.',
            error,
          });
        }
        if (result.affectedRows === 0) {
          return res.status(404).json({
            message: 'Customer not found.',
          });
        }
        res.json({
          message: 'Customer updated successfully!',
          result,
        });
      });
    };