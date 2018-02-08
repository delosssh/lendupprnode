import Client from '../models/client';
import BaseCtrl from './base';
var random = require('randomatic');

export default class ClientCtrl extends BaseCtrl {
  model = Client;

  // Insert
  insert = (req, res) => {
    const obj = new this.model(req.body);
    obj.clientNumber = random('ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789', 6);
    obj.save((err, item) => {
      // 11000 is the code for duplicate key error
      if (err && err.code === 11000) {
        res.sendStatus(400);
      }
      if (err) {
        return console.error(err);
      }
      res.status(200).json(item);
    });
  }

  getClient = (req, res) => {
    this.model.find({ clientNumber: req.params.id }, (err, obj) => {
      if (err) { return console.error(err); }
      res.json(obj);
    });
  }
}
