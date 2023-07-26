const Purchase = require('../models/purchase');
const connection = require('../db'); 

exports.createPurchase = (req, res) => {
  const { date, fishId, payment, fishWeight, meatWeight, averageFishSize, fishRate, meatRate, wholeCutWeight, wholeCutPacks, bookCutWeight, bookCutPackets, steaksCutWeight, steaksCutPackets, filletsCutWeight, filletsCutPackets, fingersCutWeight, fingersCutPackets, biscuitsCutWeight, biscuitsCutPackets, headAndBonesWeight, headAndBonesPackets } = req.body;

  const newPurchase = new Purchase({
    date,
    fishId,
    payment,
    fishWeight,
    meatWeight,
    averageFishSize,
    fishRate,
    meatRate,
    wholeCutWeight,
    wholeCutPacks,
    bookCutWeight,
    bookCutPackets,
    steaksCutWeight,
    steaksCutPackets,
    filletsCutWeight,
    filletsCutPackets,
    fingersCutWeight,
    fingersCutPackets,
    biscuitsCutWeight,
    biscuitsCutPackets,
    headAndBonesWeight,
    headAndBonesPackets,
  });

  Purchase.create(newPurchase, (error, purchase) => {
    if (error) {
      return res.status(500).json({
        message: 'An error occurred while creating a new purchase.',
        error,
      });
    }
    res.json({
      message: 'Purchase created successfully!',
      purchase,
    });
  });
};

exports.getAllPurchases = (req, res) => {
  Purchase.getAll((error, purchases) => {
    if (error) {
      return res.status(500).json({
        message: 'An error occurred while retrieving purchases.',
        error,
      });
    }
    res.json({
      message: 'Retrieved purchases successfully!',
      purchases,
    });
  });
};
