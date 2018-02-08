import { BaseModel } from './base.model';

export class LoanModel extends BaseModel {
  loanId: String;
  clientNumber: String;
  principalAmount: Number;
  interestRate: Number;
  loanTypeId: String;
  paymentTypeId: String;
  applicationDate: Date;
  loanApproveDate: Date;
  releaseDate: Date;
  dueDate: Date;
  numberOfPayments: Number;
  paymentAmount: Number;
  paymentInterval: Number;
  lastUpdate: Date;
  creationDate: Date;
}