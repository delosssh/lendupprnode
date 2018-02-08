import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { MatDialog } from '@angular/material';
// import { MdDialog } from '@angular/material';

import { LoanService } from '../services/loan.service';
import { ClientPaymentService } from '../services/client-payment.service'

import { LoanModel } from '../models/loan.model';
import { ClientPaymentModel } from '../models/clientpayment.model';
import { LoanPaymentDialogComponent } from '../loan-payments/loan-payment-dialog.component';
import { AddLoanPaymentDialogComponent } from '../add-loan-payment/add-loan-payment-dialog.component';

@Component({
  selector: 'loan-details',
  templateUrl: './loan-details.component.html',
  styleUrls: ['./loan-details.component.scss']
})
export class LoanDetailsComponent implements OnInit {

  loan: LoanModel;
  loanModel: LoanModel;
  loanId: String;
  payments = [];

  constructor(
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private loanServie: LoanService,
    private paymentService: ClientPaymentService
  ) {
    this.loan = new LoanModel();
    // this.payments = new ClientPaymentModel[];
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        params => {
          this.loanId = params['id'];
          console.dir('' + this.loan);
          this.getLoanDetails(this.loanId);
        }
      );
  }

  getLoanDetails(id: String) {
    this.loanModel = new LoanModel();
    this.loanModel._id = id;
    this.loanServie.getLoan(this.loanModel)
      .subscribe(
        data => {
          console.log('data found');
          this.loan = data;
          console.dir(this.loan);
          console.log('checking loan payments');
          this.getLoanPayments(this.loan.clientNumber);
          // this.loan.subscribe (
          //   data => console.log(data.clientNumber),
          //   error => console.log(error)
          // );
          // this.loan.map (
          //   data => console.log(data)
          // )
        },
        error => console.log(error)
      );
  }

  getLoanPayments(clientNumber: String) {
    this.paymentService.getPayments(clientNumber)
      .subscribe (
        data => {
          this.payments = data;
          console.dir(this.payments);
        },
        error => console.log(error)
      );
  }

  paymentsDialog() {
    this.dialog.open(LoanPaymentDialogComponent, {
      data: { loanId: this.loan.loanId }
    });
  }

  addPaymentDialog() {
    this.dialog.open(AddLoanPaymentDialogComponent, {
      width: '40rem',
      data: { 
        loanId: this.loan.loanId,
        clientNumber: this.loan.clientNumber
      }
    });
  }
}