const express = require('express');
const ratelistrouter = express.Router();
const rateListController = require('../controllers/ratelistController');

ratelistrouter.post('/rate-lists', rateListController.createRateList);
ratelistrouter.get('/rate-lists', rateListController.getAllRateLists);

module.exports = ratelistrouter;
