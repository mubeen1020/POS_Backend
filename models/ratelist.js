const connection = require('../db');

class RateList {
  constructor(rateList) {
    this.fishName = rateList.fishName;
    this.fishRate = rateList.fishRate;
    this.meatRate = rateList.meatRate;
    this.fullServiceCharges = rateList.fullServiceCharges;
    this.halfServiceCharges = rateList.halfServiceCharges;
    this.minimumOrderWeight = rateList.minimumOrderWeight;
  }

  static create(newRateList, result) {
    connection.query('INSERT INTO rate_lists SET ?', newRateList, (error, res) => {
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
    connection.query('SELECT * FROM rate_lists', (error, res) => {
      if (error) {
        console.error('Error retrieving rate lists:', error);
        result(error, null);
        return;
      }
      console.log('Retrieved rate lists:', res);
      result(null, res);
    });
  }
}

module.exports = RateList;
