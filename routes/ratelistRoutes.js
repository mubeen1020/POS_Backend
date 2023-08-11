const express = require('express');
const ratelistrouter = express.Router();
const rateListController = require('../controllers/ratelistController');

ratelistrouter.post('/rate-lists', rateListController.createRateList);
ratelistrouter.get('/rate-lists', rateListController.getAllRateLists);
ratelistrouter.put('/rate-lists/:id', rateListController.updateRateList);
ratelistrouter.delete('/rate-lists/:id', rateListController.deleteRateList);

module.exports = ratelistrouter;
