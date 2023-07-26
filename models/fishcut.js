const connection = require('../db');

class FishCut {
  constructor(fishCut) {
    this.name = fishCut.name;
  }

  static create(newFishCut, result) {
    connection.query('INSERT INTO fish_cuts SET ?', newFishCut, (error, res) => {
      if (error) {
        console.error('Error creating a new fish cut:', error);
        result(error, null);
        return;
      }
      console.log('Created a new fish cut:', { id: res.insertId, ...newFishCut });
      result(null, { id: res.insertId, ...newFishCut });
    });
  }

  static getAll(result) {
    connection.query('SELECT * FROM fish_cuts', (error, res) => {
      if (error) {
        console.error('Error retrieving fish cuts:', error);
        result(error, null);
        return;
      }
      console.log('Retrieved fish cuts:', res);
      result(null, res);
    });
  }
}

module.exports = FishCut;
