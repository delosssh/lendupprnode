import * as mongoose from 'mongoose';
import ClientPayment from './clientpayment';

const loanSchema = new mongoose.Schema({
  loanId: String,
  clientNumber: String,
  principalAmount: Number,
  interestRate: Number,
  loanTypeId: String,             /** fixed rate, diminishing  */
  paymentTypeId: String,          /** daily, weekly, bi-weekly, monthly, flexible */
  applicationDate: Date,
  loanApproveDate: Date,
  releaseDate: Date,
  dueDate: Date,
  numberOfPayments: Number,       /** daily: 80days, weekly: 8 weeks, bi-weekly: 4, flexible: one-time */
  paymentAmount: Number,
  paymentInterval: Number,        /** daily: 1 day, weekly: 7 days, etc */
  lastUpdate: Date,
  creationDate: Date
});

const Loan = mongoose.model('Loan', loanSchema);

export default Loan;
