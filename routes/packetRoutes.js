const express = require('express');
const packetrouter = express.Router();
const packetController = require('../controllers/packetController');

packetrouter.post('/packets', packetController.createPacket);
packetrouter.get('/packets', packetController.getAllPackets);
packetrouter.get('/packets/:id/fish', packetController.getFishForPacket);
packetrouter.get('/packets/:id/fishcut', packetController.getFishCutForPacket);
packetrouter.delete('/packets/:id', packetController.deletePacket);
packetrouter.put('/packets/:id', packetController.updatePacket);

module.exports = packetrouter;
