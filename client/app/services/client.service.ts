import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ClientService {

  private headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
  private options = new RequestOptions({ headers: this.headers });

  constructor(private http: Http) { }

  getClients(): Observable<any> {
    return this.http.get('/api/clients').map(res => res.json());
  }

  addClient(client): Observable<any> {
    return this.http.post('/api/client', JSON.stringify(client), this.options);
  }

  getClient(client): Observable<any> {
    return this.http.get(`/api/client/${client._id}`).map(res => res.json());
  }

  editClient(client): Observable<any> {
    return this.http.put(`/api/client/${client._id}`, JSON.stringify(client), this.options);
  }

  deleteClient(client): Observable<any> {
    return this.http.delete(`/api/client/${client._id}`, this.options);
  }

}
