const express = require('express');
const purchaserouter = express.Router();
const purchaseController = require('../controllers/purchaseController');

purchaserouter.post('/purchases', purchaseController.createPurchase);
purchaserouter.get('/purchases', purchaseController.getAllPurchases);

module.exports = purchaserouter;
