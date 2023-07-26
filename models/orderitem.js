const connection = require('../db');
const Order = require('./order');
const Fish = require('./fish');
const FishCut = require('./fishcut');
const Packet = require('./packet');

class OrderItem {
  constructor(orderItem) {
    this.order_id = orderItem.order_id;
    this.fish_id = orderItem.fish_id;
    this.fish_cut_id = orderItem.fish_cut_id;
    this.weight = orderItem.weight;
    this.packet_id = orderItem.packet_id;
    this.total_packets = orderItem.total_packets;
  }

  static create(newOrderItem, result) {
    connection.query('INSERT INTO order_item SET ?', newOrderItem, (error, res) => {
      if (error) {
        console.error('Error creating a new order item:', error);
        result(error, null);
        return;
      }
      console.log('Created a new order item:', { id: res.insertId, ...newOrderItem });
      result(null, { id: res.insertId, ...newOrderItem });
    });
  }

  static getAll(result) {
    connection.query('SELECT * FROM order_item', (error, res) => {
      if (error) {
        console.error('Error retrieving order items:', error);
        result(error, null);
        return;
      }
      console.log('Retrieved order items:', res);
      result(null, res);
    });
  }

  getOrder(result) {
    Order.findById(this.orderId, (error, order) => {
      if (error) {
        console.error('Error retrieving the associated order:', error);
        result(error, null);
        return;
      }
      result(null, order);
    });
  }

  getFish(result) {
    Fish.findById(this.fishId, (error, fish) => {
      if (error) {
        console.error('Error retrieving the associated fish:', error);
        result(error, null);
        return;
      }
      result(null, fish);
    });
  }

  getFishCut(result) {
    FishCut.findById(this.fishCutId, (error, fishCut) => {
      if (error) {
        console.error('Error retrieving the associated fish cut:', error);
        result(error, null);
        return;
      }
      result(null, fishCut);
    });
  }

  getPacket(result) {
    Packet.findById(this.packetId, (error, packet) => {
      if (error) {
        console.error('Error retrieving the associated packet:', error);
        result(error, null);
        return;
      }
      result(null, packet);
    });
  }
}

module.exports = OrderItem;
