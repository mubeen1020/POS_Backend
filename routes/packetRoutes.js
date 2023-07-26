const express = require('express');
const packetrouter = express.Router();
const packetController = require('../controllers/packetController');

packetrouter.post('/packets', packetController.createPacket);
packetrouter.get('/packets', packetController.getAllPackets);
packetrouter.get('/packets/:id/fish', packetController.getFishForPacket);
packetrouter.get('/packets/:id/fishcut', packetController.getFishCutForPacket);

module.exports = packetrouter;
