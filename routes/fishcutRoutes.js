const express = require('express');
const fishcutrouter = express.Router();
const fishCutController = require('../controllers/fishcutController');

fishcutrouter.post('/fishcuts', fishCutController.createFishCut);
fishcutrouter.get('/fishcuts', fishCutController.getAllFishCuts);
fishcutrouter.put('/fishcuts/:id', fishCutController.updateFishCut);
fishcutrouter.delete('/fishcuts/:id', fishCutController.deleteFishCut);

module.exports = fishcutrouter;
