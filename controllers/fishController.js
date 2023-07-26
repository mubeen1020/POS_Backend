const Fish = require('../models/fish');
const connection = require('../db'); 

exports.createFish = (req, res) => {
  const { localName, englishName, minimumSize, maximumSize, lowestPrice, peakPrice, averagePrice, netSteaks, netBoneless, kante } = req.body;

  const newFish = new Fish({
    localName,
    englishName,
    minimumSize,
    maximumSize,
    lowestPrice,
    peakPrice,
    averagePrice,
    netSteaks,
    netBoneless,
    kante,
  });

  Fish.create(newFish, (error, fish) => {
    if (error) {
      return res.status(500).json({
        message: 'An error occurred while creating a new fish.',
        error,
      });
    }
    res.json({
      message: 'Fish created successfully!',
      fish,
    });
  });
};

exports.getAllFish = (req, res) => {
  Fish.getAll((error, fish) => {
    if (error) {
      return res.status(500).json({
        message: 'An error occurred while retrieving fish.',
        error,
      });
    }
    res.json({
      message: 'Retrieved fish successfully!',
      fish,
    });
  });
};

exports.updateFish = (req, res) => {
    const fishId = req.params.id;
    const updatedFishData = req.body;
  
    const updateQuery = 'UPDATE fish SET ? WHERE id = ?';
  
    connection.query(updateQuery, [updatedFishData, fishId], (error, result) => {
      if (error) {
        return res.status(500).json({
          message: 'An error occurred while updating the fish.',
          error,
        });
      }
  
      if (result.affectedRows === 0) {
        return res.status(404).json({
          message: 'Fish not found.',
        });
      }
  
      res.json({
        message: 'Fish updated successfully!',
        fishId,
      });
    });
  };
  
  exports.deleteFish = (req, res) => {
    const fishId = req.params.id;
  
    const deleteQuery = 'DELETE FROM fish WHERE id = ?';
  
    connection.query(deleteQuery, [fishId], (error, result) => {
      if (error) {
        return res.status(500).json({
          message: 'An error occurred while deleting the fish.',
          error,
        });
      }
  
      if (result.affectedRows === 0) {
        return res.status(404).json({
          message: 'Fish not found.',
        });
      }
  
      res.json({
        message: 'Fish deleted successfully!',
        fishId,
      });
    });
  };