const connection = require('../db');
const Fish = require('./fish');
const FishCut = require('./fishcut');

class RateListFishStock {
  constructor(rateList) {
    this.fishName = rateList.fishName;
    this.fishCut = rateList.fishCut;
    this.fishRate = rateList.fishRate;
    this.meatRate = rateList.meatRate;
    this.fishWeight = rateList.fishWeight;
    this.meatWeight = rateList.meatWeight;
  }

  static create(newRateList, result) {
    connection.query('INSERT INTO rate_list_fish_stock SET ?', newRateList, (error, res) => {
      if (error) {
        console.error('Error creating a new rate list:', error);
        result(error, null);
        return;
      }
      console.log('Created a new rate list:', { id: res.insertId, ...newRateList });
      result(null, { id: res.insertId, ...newRateList });
    });
  }

  static getAll(result) {
    connection.query('SELECT * FROM rate_list_fish_stock', (error, res) => {
      if (error) {
        console.error('Error retrieving rate lists:', error);
        result(error, null);
        return;
      }
      console.log('Retrieved rate lists:', res);
      result(null, res);
    });
  }

  getFish(result) {
    Fish.findById(this.fishName, (error, fish) => {
      if (error) {
        console.error('Error retrieving the associated fish:', error);
        result(error, null);
        return;
      }
      result(null, fish);
    });
  }

  getFishCut(result) {
    FishCut.findById(this.fishCut, (error, fishCut) => {
      if (error) {
        console.error('Error retrieving the associated fish cut:', error);
        result(error, null);
        return;
      }
      result(null, fishCut);
    });
  }
}

module.exports = RateListFishStock;
