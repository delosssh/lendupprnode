import { BaseModel } from './base.model';

export class ClientPaymentModel extends BaseModel {
  loanId: String;
  clientNumber: String;
  dueAmount: Number;
  dueDate: Date;
  paidAmount: Number;
  paidDate: Date;
  balanceAmount: Number;
  lastPaymentAmount: Number;
  lastPaymentDate: Date;
} 