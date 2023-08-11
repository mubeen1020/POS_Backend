const Packet = require('../models/packet');
const connection = require('../db'); 

exports.createPacket = (req, res) => {
  const newPacket = new Packet(req.body);

  Packet.create(newPacket, (error, packet) => {
    if (error) {
      return res.status(500).json({
        message: 'An error occurred while creating a new packet.',
        error,
      });
    }
    res.status(201).json({
      message: 'Packet created successfully!',
      packet,
    });
  });
};

exports.getAllPackets = (req, res) => {
  Packet.getAll((error, packets) => {
    if (error) {
      return res.status(500).json({
        message: 'An error occurred while retrieving packets.',
        error,
      });
    }
    res.status(200).json({
      message: 'Retrieved packets successfully!',
      packets,
    });
  });
};

exports.getFishForPacket = (req, res) => {
  const packetId = req.params.id;

  Packet.getFish((error, fish) => {
    if (error) {
      return res.status(500).json({
        message: 'An error occurred while retrieving the associated fish for the packet.',
        error,
      });
    }
    res.status(200).json({
      message: 'Retrieved the associated fish for the packet successfully!',
      fish,
    });
  });
};

exports.getFishCutForPacket = (req, res) => {
  const packetId = req.params.id;

  Packet.getFishCut((error, fishCut) => {
    if (error) {
      return res.status(500).json({
        message: 'An error occurred while retrieving the associated fish cut for the packet.',
        error,
      });
    }
    res.status(200).json({
      message: 'Retrieved the associated fish cut for the packet successfully!',
      fishCut,
    });
  });
};

exports.updatePacket = (req, res) => {
  const packetId = req.params.id;
  const updatedPacket = req.body;
  const query = 'UPDATE packets SET ? WHERE id = ?'; // Assuming 'packets' is the correct table name

  connection.query(query, [updatedPacket, packetId], (error, result) => {
    if (error) {
      return res.status(500).json({
        message: 'An error occurred while updating the packet.',
        error,
      });
    }

    res.json({
      message: 'Packet updated successfully!',
      updatedPacket,
    });
  });
};


exports.deletePacket = (req, res) => {
  const packetId = req.params.id;

  const deleteQuery = 'DELETE FROM packets WHERE id = ?';

  connection.query(deleteQuery, [packetId], (error, result) => {
    if (error) {
      return res.status(500).json({
        message: 'An error occurred while deleting the packet.',
        error,
      });
    }

    res.json({
      message: 'Packet deleted successfully!',
      result,
    });
  });
};


