const FishCut = require('../models/fishcut');
const connection = require('../db'); 

exports.createFishCut = (req, res) => {
  const { name } = req.body;

  const newFishCut = new FishCut({
    name,
  });

  FishCut.create(newFishCut, (error, fishCut) => {
    if (error) {
      return res.status(500).json({
        message: 'An error occurred while creating a new fish cut.',
        error,
      });
    }
    res.json({
      message: 'Fish cut created successfully!',
      fishCut,
    });
  });
};

exports.getAllFishCuts = (req, res) => {
  FishCut.getAll((error, fishCuts) => {
    if (error) {
      return res.status(500).json({
        message: 'An error occurred while retrieving fish cuts.',
        error,
      });
    }
    res.json({
      message: 'Retrieved fish cuts successfully!',
      fishCuts,
    });
  });
};

exports.updateFishCut = (req, res) => {
    const fishCutId = req.params.id;
    const updatedFishCutData = req.body;
  
    FishCut.findByIdAndUpdate(fishCutId, updatedFishCutData, (error, updatedFishCut) => {
      if (error) {
        return res.status(500).json({
          message: 'An error occurred while updating the fish cut.',
          error,
        });
      }
      if (!updatedFishCut) {
        return res.status(404).json({
          message: 'Fish cut not found.',
        });
      }
      res.json({
        message: 'Fish cut updated successfully!',
        updatedFishCut,
      });
    });
  };
  
  exports.deleteFishCut = (req, res) => {
    const fishCutId = req.params.id;
  
    FishCut.findByIdAndDelete(fishCutId, (error, deletedFishCut) => {
      if (error) {
        return res.status(500).json({
          message: 'An error occurred while deleting the fish cut.',
          error,
        });
      }
      if (!deletedFishCut) {
        return res.status(404).json({
          message: 'Fish cut not found.',
        });
      }
      res.json({
        message: 'Fish cut deleted successfully!',
        deletedFishCut,
      });
    });
  };