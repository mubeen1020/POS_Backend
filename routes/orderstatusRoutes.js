const express = require('express');
const orderstatusrouter = express.Router();
const orderStatusController = require('../controllers/orderstatusController');

orderstatusrouter.post('/order-status', orderStatusController.createOrderStatus);
orderstatusrouter.get('/order-status', orderStatusController.getAllOrderStatus);
orderstatusrouter.put('/order-status/:id', orderStatusController.updateOrderStatus);
orderstatusrouter.delete('/order-status/:id', orderStatusController.deleteOrderStatus);

module.exports = orderstatusrouter;
