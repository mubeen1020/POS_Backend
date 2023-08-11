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


exports.updatePurchases = (req, res) => {
  const PurchasesId = req.params.id;
  const updatedPurchases = req.body;
  const query = 'UPDATE purchase SET ? WHERE id = ?'; // Assuming 'packets' is the correct table name

  connection.query(query, [updatedPurchases, PurchasesId], (error, result) => {
    if (error) {
      return res.status(500).json({
        message: 'An error occurred while updating the purchase.',
        error,
      });
    }

    res.json({
      message: 'purchase updated successfully!',
      updatedPurchases,
    });
  });
};


exports.deletePurchases= (req, res) => {
  const PurchasesId = req.params.id;

  const deleteQuery = 'DELETE FROM purchase WHERE id = ?';

  connection.query(deleteQuery, [PurchasesId], (error, result) => {
    if (error) {
      return res.status(500).json({
        message: 'An error occurred while deleting the purchase.',
        error,
      });
    }

    res.json({
      message: 'purchase deleted successfully!',
      result,
    });
  });
};