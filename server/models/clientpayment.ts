import * as mongoose from 'mongoose';

const clientPaymentSchema = new mongoose.Schema({
  loanId: String,
  clientNumber: String,
  dueAmount: Number,
  dueDate: Date,
  paidAmount: Number,
  paidDate: Date,
  balanceAmount: Number,
  lastPaymentAmount: Number,
  lastPaymentDate: Date
});

const ClientPayment = mongoose.model('ClientPayment', clientPaymentSchema);

export default ClientPayment;
