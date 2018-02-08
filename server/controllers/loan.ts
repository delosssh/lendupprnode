import Loan from '../models/loan';
import BaseCtrl from './base';
import { DailyPaymentSchedule } from '../models/daily-payment-schedule';
import * as moment from 'moment';
var random = require('randomatic');

export default class LoanCtrl extends BaseCtrl {
  model = Loan;

  // Insert
  insert = (req, res) => {
    const obj = new this.model(req.body);
    obj.loanId = random('ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789', 6);
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


  getClientLoans = (req, res) => {
    this.model.find({ clientNumber: req.params.id }, (err, obj) => {
      if (err) { return console.error(err); }
      res.json(obj);
    });
  }

  countClientLoans = (req, res) => {
    this.model.count({ clientNumber: req.params.id }, (err, count) => {
      if (err) { return console.error(err); }
      res.json(count);
    });
  }

  calculateRepayment = (req, res) => {
    /**
     * - principal
     * - payment type (daily, weekly, monthly)
     * - savings = 10% of principal
     * - mutual aid = 4% of principal
     */

    var obj = new this.model(req.body);

    var totalPayableAmount: number;
    var interestRate: number;
    var savings: number;
    var mutualAid: number;
    var paymentType: string;
    var totalNumberOfPayments: number;
    var months: number;
    var interestAmount: number;
    var totalPayable: number;
    var dueAmount: number;
    var payInterval: number;
    var retval: any;
    var paymentSchedule: DailyPaymentSchedule;
    var schedules = [];
    var dueDate: Date = new Date();
    // var dueDate1: Date = new Date();

    retval = 'none';

    if (obj.paymentTypeId == "daily") {
      console.log("daily");
      payInterval = 1;
      interestRate = 3.5;
      savings = obj.principalAmount * 0.10;
      mutualAid = obj.principalAmount * 0.04;
      totalNumberOfPayments = 80;
      months = (totalNumberOfPayments / 5) / 4;
      interestAmount = obj.principalAmount * ((interestRate * months) / 100);

      totalPayable = obj.principalAmount + savings + mutualAid + interestAmount;
      dueAmount = totalPayable / totalNumberOfPayments;

      var counter: number = 0;

      while (true) {
        console.log(' dow: ' + dueDate.getDay());
        paymentSchedule = new DailyPaymentSchedule();
        if (dueDate.getDay() != 0 && dueDate.getDay() != 6) {
          paymentSchedule.paymentNumber = counter + 1;
          paymentSchedule.dueAmount = dueAmount;
          paymentSchedule.dueDate = new Date(dueDate.getTime());
          
          counter ++;
          
        } else {
          paymentSchedule.paymentNumber = 0;
          paymentSchedule.dueAmount = 0;
          paymentSchedule.dueDate = new Date(dueDate.getTime());
          
        }
        schedules.push(paymentSchedule);
        
        if (counter == totalNumberOfPayments) {
          break;
        }

        // counter ++;

        dueDate.setDate(dueDate.getDate() + 1);

      }

      retval = schedules;

    } else if (obj.paymentTypeId == "weekly") {
      console.log("weekly");

      payInterval = 7;
      interestRate = 3.5;
      savings = obj.principalAmount * 0.10;
      mutualAid = obj.principalAmount * 0.04;
      totalNumberOfPayments = 16;
      months = totalNumberOfPayments / 4;
      interestAmount = obj.principalAmount * ((interestRate * months) / 100);

      totalPayable = obj.principalAmount + savings + mutualAid + interestAmount;
      dueAmount = totalPayable / totalNumberOfPayments;

      var counter: number = 0;

      while (true) {
        console.log(' dow: ' + dueDate.getDay());
        paymentSchedule = new DailyPaymentSchedule();
        // if (dueDate.getDay() != 0 && dueDate.getDay() != 6) {
          paymentSchedule.paymentNumber = counter + 1;
          paymentSchedule.dueAmount = dueAmount;
          paymentSchedule.dueDate = new Date(dueDate.getTime());
          
          counter ++;
          
        // } else {
        //   paymentSchedule.paymentNumber = 0;
        //   paymentSchedule.dueAmount = 0;
        //   paymentSchedule.dueDate = new Date(dueDate.getTime());
          
        // }
        schedules.push(paymentSchedule);
        
        if (counter == totalNumberOfPayments) {
          break;
        }

        // counter ++;

        dueDate.setDate(dueDate.getDate() + payInterval);

      }

      retval = schedules;

      

    } else if (obj.paymentTypeId == "monthly") {
      console.log("monthly");
    } else {
      console.log("invalid payment type");
    }

    console.dir(retval);
    // retval = JSON.parse(retval);
    // res.status(200).json(JSON.stringify(retval));
    // res.status(200).json({error: false});
    res.status(200).json(retval);
    
    // res.header("Content-Type",'application/json');
    // res.send(retval);

  }
}
