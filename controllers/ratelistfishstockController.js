const RateListFishStock = require('../models/ratelistfishstock');
const connection = require('../db'); 

exports.createRateListFishStock = (req, res) => {
  const newRateList = new RateListFishStock(req.body);

  RateListFishStock.create(newRateList, (error, rateList) => {
    if (error) {
      return res.status(500).json({
        message: 'An error occurred while creating a new rate list.',
        error,
      });
    }
    res.json({
      message: 'Rate list created successfully!',
      rateList,
    });
  });
};

exports.getAllRateListsFishStock = (req, res) => {
  RateListFishStock.getAll((error, rateLists) => {
    if (error) {
      return res.status(500).json({
        message: 'An error occurred while retrieving rate lists.',
        error,
      });
    }
    res.json({
      message: 'Retrieved rate lists successfully!',
      rateLists,
    });
  });
};


exports.updateRateListsFishStock  = (req, res) => {
  const RateListsFishStockId = req.params.id;
  const updatedRateListsFishStock  = req.body;
  const query = 'UPDATE rate_list_fish_stock SET ? WHERE id = ?'; // Assuming 'packets' is the correct table name

  connection.query(query, [updatedRateListsFishStock , RateListsFishStockId], (error, result) => {
    if (error) {
      return res.status(500).json({
        message: 'An error occurred while updating the rate list fish stock.',
        error,
      });
    }

    res.json({
      message: 'rate list fish stock  updated successfully!',
      updatedRateListsFishStock ,
    });
  });
};


exports.deleteRateListsFishStock= (req, res) => {
  const RateListsFishStockId = req.params.id;

  const deleteQuery = 'DELETE FROM rate_list_fish_stock  WHERE id = ?';

  connection.query(deleteQuery, [RateListsFishStockId], (error, result) => {
    if (error) {
      return res.status(500).json({
        message: 'An error occurred while deleting the rate list fish stock.',
        error,
      });
    }

    res.json({
      message: 'rate list fish stock  deleted successfully!',
      result,
    });
  });
};