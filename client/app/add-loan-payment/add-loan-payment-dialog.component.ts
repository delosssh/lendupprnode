import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';

import { ClientPaymentService } from '../services/client-payment.service';

import { ClientPaymentModel } from '../models/clientpayment.model';

@Component({
  selector: 'add-loan-payment-dialog',
  templateUrl: './add-loan-payment-dialog.component.html',
  styles: ['./add-loan-payment-dialog.component.scss']
})
export class AddLoanPaymentDialogComponent {

  payment: ClientPaymentModel;

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private paymentService: ClientPaymentService
  ) {
    console.log('constructor was called');
    console.dir(data);
    this.payment = new ClientPaymentModel();
    this.payment.clientNumber = data.clientNumber;
    this.payment.loanId = data.loanId;
  }

  ngOnInit() {
  }

  save() {
    this.paymentService.addPayment(this.payment)
      .subscribe(
        data => console.log(data),
        error => console.log(error)
      );
  }

}