import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { MatDialog } from '@angular/material';

import { ClientService } from '../services/client.service';
import { LoanService } from '../services/loan.service';
import { LoansDialogComponent } from './loans-dialog.component';

@Component({
  selector: 'client-list-child',
  templateUrl: './client-list-child.component.html'
})
export class ClientListChildComponent {
  @Input('clientNumber') clientNumber: String;
  @Output('load') load = new EventEmitter<any>();
  loans: String = '0';

  constructor (
    private dialog: MatDialog,
    private loanService: LoanService
  ) {
    console.log('client-list-child constructor');
    // console.log(this.clientNumber);
  }

  ngOnInit() {
    console.log('clientNumber: ' + this.clientNumber);
    this.checkLoan(this.clientNumber);
  }

  checkLoan(clientNumber: String) {
    console.log(clientNumber);
    this.loanService.countLoans(clientNumber)
      .subscribe (
        res => {
          console.log(res);
          console.dir(res);
          this.loans = res;
          this.load.emit(res);
        },
        error => {
          console.log(error)
          this.loans = '-1';
        }
      )
    //return clientNumber;
  }

  openLoansDialog() {
    this.dialog.open(LoansDialogComponent, {
      data: { clientNumber: this.clientNumber }
    });
  }
}