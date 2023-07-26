const express = require('express');
const rateListFishStockrouter = express.Router();
const rateListFishStockController = require('../controllers/ratelistfishstockController');

rateListFishStockrouter.post('/rate-lists-fish-stock', rateListFishStockController.createRateListFishStock);
rateListFishStockrouter.get('/rate-lists-fish-stock', rateListFishStockController.getAllRateListsFishStock);

module.exports = rateListFishStockrouter;
