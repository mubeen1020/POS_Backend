const connection = require('../db');
const Fish = require('./fish');
const FishCut = require('./fishcut');

class Packet {
  constructor(packet) {
    this.date = packet.date;
    this.fish_Id = packet.fish_Id;
    this.averageFishSize = packet.averageFishSize;
    this.fishCut_Id = packet.fishCut_Id;
    this.fishWeight = packet.fishWeight;
    this.meatWeight = packet.meatWeight;
    this.fishRate = packet.fishRate;
    this.meatRate = packet.meatRate;
    this.skin = packet.skin;
    this.kante = packet.kante;
    this.availablePackets = packet.availablePackets;
    this.packetPrice = packet.packetPrice;
    this.twoPacketsPrice = packet.twoPacketsPrice;
    this.fivePacketsPrice = packet.fivePacketsPrice;
    this.oldStockDiscount = packet.oldStockDiscount;
    this.specialDiscount = packet.specialDiscount;
  }

  static create(newPacket, result) {
    connection.query('INSERT INTO packets SET ?', newPacket, (error, res) => {
      if (error) {
        console.error('Error creating a new packet:', error);
        result(error, null);
        return;
      }
      console.log('Created a new packet:', { id: res.insertId, ...newPacket });
      result(null, { id: res.insertId, ...newPacket });
    });
  }

  static getAll(result) {
    connection.query('SELECT * FROM packets', (error, res) => {
      if (error) {
        console.error('Error retrieving packets:', error);
        result(error, null);
        return;
      }
      console.log('Retrieved packets:', res);
      result(null, res);
    });
  }

  static getFish(result) {
    Fish.findById(this.fish_Id, (error, fish) => {
      if (error) {
        console.error('Error retrieving the associated fish:', error);
        result(error, null);
        return;
      }
      result(null, fish);
    });
  }

  static getFishCut(result) {
    FishCut.findById(this.fishCut_Id, (error, fishcut) => {
      if (error) {
        console.error('Error retrieving the associated fish cut:', error);
        result(error, null);
        return;
      }
      result(null, fishcut);
    });
  }
}

module.exports = Packet;
