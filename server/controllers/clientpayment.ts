import ClientPayment from '../models/clientpayment';
import BaseCtrl from './base';

export default class PaymentCtrl extends BaseCtrl {
  model = ClientPayment;

  getClient = (req, res) => {
    this.model.find({ clientNumber: req.params.id }, (err, obj) => {
      if (err) { return console.error(err); }
      res.json(obj);
    });
  }

  getLoanPayments = (req, res) => {
    this.model.find({ loanId: req.params.id }, (err, obj) => {
      if (err) { return console.error(err); }
      res.json(obj);
    });
  }
}
