import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { ClientService } from '../services/client.service';
import { ToastComponent } from '../shared/toast/toast.component';
import { ClientModel } from '../models/client.model';

@Component({
  selector: 'add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.scss']
})
export class AddClientComponent {
 
  client: ClientModel;

  public constructor (
    private clientService: ClientService,
    private http: Http,
    private router: Router
  ) {
    this.client = new ClientModel();
  }

  save() {
    console.log(this.client.firstName);
    this.clientService.addClient(this.client)
      .subscribe(
        res => {
          console.log('new client was added');
          this.router.navigate(['client-list']);
        },
        error => console.log(error)
      );

  }
}