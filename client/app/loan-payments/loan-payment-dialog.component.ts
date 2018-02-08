import { Component, Inject, OnInit } from '@angular/core';
// import { MdDialog, MD_DIALOG_DATA } from '@angular/material';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';

import { AuthService } from '../services/auth.service';
import { ClientPaymentService } from '../services/client-payment.service';

@Component({
  selector: 'loan-payment',
  templateUrl: './loan-payment-dialog.component.html',
  styleUrls: ['./loan-payment-dialog.component.scss']
})
export class LoanPaymentDialogComponent implements OnInit {

  payments = [];

  constructor(
    private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) private data: any,
    private auth: AuthService,
    private paymentService: ClientPaymentService
  ) {
    console.dir(data);
  }

  ngOnInit() {
    console.dir(this.data);
    this.paymentService.getLoanPayments(this.data.loanId)
      .subscribe(
        data => {
          this.payments = data;
          console.log('payments found');
          console.dir(this.payments);
        },
        error => console.log(error)
      );
  }

  // constructor(
  //   private router: Router,
  //   @Inject(MD_DIALOG_DATA) private data: any,
  //   private loanService: LoanService
  // ) {
  //   console.log('constructor was called');
  // }
  
}