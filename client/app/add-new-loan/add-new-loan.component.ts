import { Component } from '@angular/core';

import { LoanService } from '../services/loan.service';

import { LoanModel } from '../models/loan.model';
import { PaymentSchedule } from '../models/payment-schedule.model';

@Component({
  selector: 'add-new-loan',
  templateUrl: './add-new-loan.component.html',
  styleUrls: ['./add-new-loan.component.scss']
})
export class AddNewLoanComponent {
  loan: LoanModel;
  schedules = [];

  constructor (
    private loanService: LoanService
  ) {
    this.loan = new LoanModel();
    this.loan.principalAmount = 0;
  }

  step1Next() {
    console.log('spte1Next');
    console.dir(this.loan);
    this.loanService.paymentSchedule(this.loan)
      .subscribe(
        data => {
          this.schedules = data;
          console.log('found data');
          console.dir(data);
        },
        error => console.log(error)
      )
  }

}