const connection = require('../db');

class Fish {
  constructor(fish) {
    this.localName = fish.localName;
    this.englishName = fish.englishName;
    this.minimumSize = fish.minimumSize;
    this.maximumSize = fish.maximumSize;
    this.lowestPrice = fish.lowestPrice;
    this.peakPrice = fish.peakPrice;
    this.averagePrice = fish.averagePrice;
    this.netSteaks = fish.netSteaks;
    this.netBoneless = fish.netBoneless;
    this.kante = fish.kante;
  }

  static create(newFish, result) {
    connection.query('INSERT INTO fish SET ?', newFish, (error, res) => {
      if (error) {
        console.error('Error creating a new fish:', error);
        result(error, null);
        return;
      }
      console.log('Created a new fish:', { id: res.insertId, ...newFish });
      result(null, { id: res.insertId, ...newFish });
    });
  }

  static getAll(result) {
    connection.query('SELECT * FROM fish', (error, res) => {
      if (error) {
        console.error('Error retrieving fish:', error);
        result(error, null);
        return;
      }
      console.log('Retrieved fish:', res);
      result(null, res);
    });
  }
}

module.exports = Fish;
