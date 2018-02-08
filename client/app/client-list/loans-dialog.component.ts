import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { MAT_DIALOG_DATA } from '@angular/material';

import { LoanModel } from '../models/loan.model';

import { LoanService } from '../services/loan.service';

@Component({
  selector: 'loans-dialog',
  templateUrl: './loans-dialog.component.html'
})
export class LoansDialogComponent {

  loan: LoanModel;
  loans = [];

  constructor(
    private router: Router,
    @Inject(MAT_DIALOG_DATA) private data: any,
    private loanService: LoanService
  ) {
    console.log('constructor was called');
  }

  ngOnInit() {
    console.log('ngOnInit was called');
    console.log('data: ' + this.data);
    console.dir('data dir: ' + this.data);
    console.dir('clientNumber: ' + this.data.clientNumber);
    this.clientLoans(this.data.clientNumber);
  }

  clientLoans(clientNumber) {
    this.loan = new LoanModel();
    this.loan.clientNumber = clientNumber;
    this.loanService.getLoans(this.loan)
    .subscribe(
      data => this.loans = data,
      error => console.log(error)
    );
  }
 
  gotoDetails(loan) {
    console.log('loanId: ' + loan);
    console.dir(loan);

    this.router.navigate(['/loan-details', {id: loan._id}]);
  }
}