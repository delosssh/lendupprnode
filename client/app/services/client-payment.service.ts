import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ClientPaymentService {

  private headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
  private options = new RequestOptions({ headers: this.headers });

  constructor(private http: Http) { }

  addPayment(payment): Observable<any> {
    return this.http.post('/api/clientpayment', JSON.stringify(payment), this.options);
  }
  
  getPayments(clientNumber): Observable<any> {
    return this.http.get(`/api/clientpayments/client/${clientNumber}`).map(res => res.json());
  }
  
  getLoanPayments(loanId): Observable<any> {
    return this.http.get(`/api/clientpayments/loan/${loanId}`).map(res => res.json());
  }

}