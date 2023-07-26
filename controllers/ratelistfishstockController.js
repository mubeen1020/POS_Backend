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
