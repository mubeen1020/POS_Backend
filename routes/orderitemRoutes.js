const express = require('express');
const orderItemController = require('../controllers/orderitemController');

const orderitemrouter = express.Router();

orderitemrouter.post('/order-items', orderItemController.createOrderItem);
orderitemrouter.get('/order-items', orderItemController.getAllOrderItems);
orderitemrouter.put('/order-items/:orderItemId', orderItemController.updateOrderItem);
orderitemrouter.delete('/order-items/:orderItemId', orderItemController.deleteOrderItem);


module.exports = orderitemrouter;
