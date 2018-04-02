import { Injectable } from '@angular/core';

import {
  Http,
  Response,
  Headers,
  URLSearchParams,
  RequestOptions
} from '@angular/http';

@Injectable()
export class CustomerService {

  constructor(private http: Http) { }
  getCustomers() {
    return this.http.get('http://localhost:8080/api/v1/customer/all');
  }

  saveCustomer(customer) {
    let cpHeaders = new Headers({
      'Content-Type': 'application/json'
    });
    let options = new RequestOptions({
        headers: cpHeaders
    });

    return this.http.post('http://localhost:8080/api/v1/customer/register', JSON.stringify(customer), options);
  }

  saveProperty(property) {
    let cpHeaders = new Headers({
      'Content-Type': 'application/json'
    });
    let options = new RequestOptions({
        headers: cpHeaders
    });
    return this.http.post('http://localhost:8080/api/v1/property/register', JSON.stringify(property), options)
  }

  
}
