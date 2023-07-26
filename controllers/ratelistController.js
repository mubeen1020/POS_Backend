const RateList = require('../models/ratelist');
const connection = require('../db'); 

exports.createRateList = (req, res) => {
  const newRateList = new RateList(req.body);

  RateList.create(newRateList, (error, rateList) => {
    if (error) {
      return res.status(500).json({
        message: 'An error occurred while creating a new rate list.',
        error,
      });
    }
    res.status(201).json({
      message: 'Rate list created successfully!',
      rateList,
    });
  });
};

exports.getAllRateLists = (req, res) => {
  RateList.getAll((error, rateLists) => {
    if (error) {
      return res.status(500).json({
        message: 'An error occurred while retrieving rate lists.',
        error,
      });
    }
    res.status(200).json({
      message: 'Retrieved rate lists successfully!',
      rateLists,
    });
  });
};
