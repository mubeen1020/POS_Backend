const express = require('express');
const orderrouter = express.Router();
const orderController = require('../controllers/orderController');

orderrouter.post('/orders', orderController.createOrder);
orderrouter.get('/orders', orderController.getAllOrders);
orderrouter.get('/orders/:orderId/order-status', orderController.getOrderStatus);
orderrouter.get('/orders/:orderId/payment-status', orderController.getPaymentStatus);
orderrouter.put('/orders/:orderId', orderController.updateOrder);
orderrouter.delete('/orders/:orderId', orderController.deleteOrder);

module.exports = orderrouter;
