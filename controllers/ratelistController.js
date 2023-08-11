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

exports.updateRateList = (req, res) => {
  const RateListId = req.params.id;
  const updatedRateList = req.body;
  const query = 'UPDATE rate_lists SET ? WHERE id = ?'; // Assuming 'packets' is the correct table name

  connection.query(query, [updatedRateList, RateListId], (error, result) => {
    if (error) {
      return res.status(500).json({
        message: 'An error occurred while updating the rate lists.',
        error,
      });
    }

    res.json({
      message: 'rate lists updated successfully!',
      updatedRateList,
    });
  });
};


exports.deleteRateList= (req, res) => {
  const RateListId = req.params.id;

  const deleteQuery = 'DELETE FROM rate_lists WHERE id = ?';

  connection.query(deleteQuery, [RateListId], (error, result) => {
    if (error) {
      return res.status(500).json({
        message: 'An error occurred while deleting the rate lists.',
        error,
      });
    }

    res.json({
      message: 'rate lists deleted successfully!',
      result,
    });
  });
};
