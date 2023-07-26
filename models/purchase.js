const connection = require('../db');
const Fish = require('./fish'); 

class Purchase {
  constructor(purchase) {
    this.date = purchase.date;
    this.fish_Id = purchase.fish_Id; 
    this.payment = purchase.payment;
    this.fishWeight = purchase.fishWeight;
    this.meatWeight = purchase.meatWeight;
    this.averageFishSize = purchase.averageFishSize;
    this.fishRate = purchase.fishRate;
    this.meatRate = purchase.meatRate;
    this.wholeCutWeight = purchase.wholeCutWeight;
    this.wholeCutPacks = purchase.wholeCutPacks;
    this.bookCutWeight = purchase.bookCutWeight;
    this.bookCutPackets = purchase.bookCutPackets;
    this.steaksCutWeight = purchase.steaksCutWeight;
    this.steaksCutPackets = purchase.steaksCutPackets;
    this.filletsCutWeight = purchase.filletsCutWeight;
    this.filletsCutPackets = purchase.filletsCutPackets;
    this.fingersCutWeight = purchase.fingersCutWeight;
    this.fingersCutPackets = purchase.fingersCutPackets;
    this.biscuitsCutWeight = purchase.biscuitsCutWeight;
    this.biscuitsCutPackets = purchase.biscuitsCutPackets;
    this.headAndBonesWeight = purchase.headAndBonesWeight;
    this.headAndBonesPackets = purchase.headAndBonesPackets;
  }

  static create(newPurchase, result) {
    connection.query('INSERT INTO purchase SET ?', newPurchase, (error, res) => {
      if (error) {
        console.error('Error creating a new purchase:', error);
        result(error, null);
        return;
      }
      console.log('Created a new purchase:', { id: res.insertId, ...newPurchase });
      result(null, { id: res.insertId, ...newPurchase });
    });
  }

  static getAll(result) {
    connection.query('SELECT * FROM purchase', (error, res) => {
      if (error) {
        console.error('Error retrieving purchases:', error);
        result(error, null);
        return;
      }
      console.log('Retrieved purchases:', res);
      result(null, res);
    });
  }

  getFish(result) {
    Fish.findById(this.fish_Id, (error, fish) => {
      if (error) {
        console.error('Error retrieving the associated fish:', error);
        result(error, null);
        return;
      }
      result(null, fish);
    });
  }
}

module.exports = Purchase;
