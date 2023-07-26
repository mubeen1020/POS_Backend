const express = require('express');
const orderItemController = require('../controllers/orderitemController');

const orderitemrouter = express.Router();

orderitemrouter.post('/order-items', orderItemController.createOrderItem);
orderitemrouter.get('/order-items', orderItemController.getAllOrderItems);
orderitemrouter.put('/:orderItemId', orderItemController.updateOrderItem);
orderitemrouter.delete('/:orderItemId', orderItemController.deleteOrderItem);


module.exports = orderitemrouter;
