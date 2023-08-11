const express = require('express');
const purchaserouter = express.Router();
const purchaseController = require('../controllers/purchaseController');

purchaserouter.post('/purchases', purchaseController.createPurchase);
purchaserouter.get('/purchases', purchaseController.getAllPurchases);
purchaserouter.put('/purchases/:id', purchaseController.updatePurchases);
purchaserouter.delete('/purchases/:id', purchaseController.deletePurchases);

module.exports = purchaserouter;
