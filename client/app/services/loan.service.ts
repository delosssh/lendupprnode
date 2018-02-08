import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class LoanService {

  private headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
  private options = new RequestOptions({ headers: this.headers });

  constructor(private http: Http) { }

  // paymentSchedule(loan): Observable<any> {
  //   return this.http.post('/api/loan/calculate', JSON.stringify(loan), this.options);
  // }

  paymentSchedule(loan): Observable<any> {
    return this.http.post('/api/loan/calculate', JSON.stringify(loan), this.options).map(res => res.json());
  }  

  getLoans(loan): Observable<any> {
    return this.http.get(`/api/loans/client/${loan.clientNumber}`).map(res => res.json());
  }

  countLoans(clientNumber): Observable<any> {
    return this.http.get(`/api/loans/client/count/${clientNumber}`).map(res => res.json());
  }

  addLoan(loan): Observable<any> {
    return this.http.post('/api/loan', JSON.stringify(loan), this.options);
  }

  getLoan(loan): Observable<any> {
    return this.http.get(`/api/loan/${loan._id}`).map(res => res.json());
  }

  editLoan(loan): Observable<any> {
    return this.http.put(`/api/loan/${loan._id}`, JSON.stringify(loan), this.options);
  }

  deleteLoan(loan): Observable<any> {
    return this.http.delete(`/api/loan/${loan._id}`, this.options);
  }

}
