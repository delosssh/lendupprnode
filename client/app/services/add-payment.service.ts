import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class AddPaymentService {

  private headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
  private options = new RequestOptions({ headers: this.headers });

  constructor(private http: Http) { }

  addPayment(payment): Observable<any> {
    return this.http.post('/api/payment', JSON.stringify(payment), this.options);
  }
  
  getPayments(client): Observable<any> {
    return this.http.get(`/api/payment/${client._id}`).map(res => res.json());
  }
  
}