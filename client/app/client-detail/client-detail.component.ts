import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material';

import { ClientService } from '../services/client.service';

import { ClientModel } from '../models/client.model';

import { LoansDialogComponent } from '../client-list/loans-dialog.component';

@Component({
  selector: 'client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.scss']
})
export class ClientDetailComponent implements OnInit {

  _id: String;
  _client: ClientModel = new ClientModel();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog,
    private clientService: ClientService
  ) {

  }

  ngOnInit() {
    this.route.params
    .subscribe(
      params => {
        this._client._id = params['id'];
        this.clientDetails(this._client);
      }
    );    
  }

  clientDetails(client: ClientModel) {
    this.clientService.getClient(client)
      .subscribe (
        data => this._client = data,
        error => console.log(error)
      )
  }

  loans(client: ClientModel) {
    this.dialog.open(LoansDialogComponent, {
      data: { clientNumber: client.clientNumber }
    });    
  }

  newLoan(client: ClientModel) {
    this.router.navigate(['/add-new-loan', { clientNumber: client.clientNumber }]);
  }

  update(client: ClientModel) {
    console.log(client.clientNumber);
    console.log(client.firstName);

    this.clientService.editClient(client)
      .subscribe (
        data => console.dir(data),
        error => console.dir(error)
      );
  }
}