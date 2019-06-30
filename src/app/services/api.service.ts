import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // local
  WEB_URL = 'http://localhost:8082';
  API_URL = 'http://localhost:8082/api';
  // testing
  // API_URL = 'https://hidden-island-92023.herokuapp.com/api';

  constructor(private httpClient: HttpClient) { }

  // Dashboard
  getDashboardData(){
    return this.httpClient.get(this.API_URL + '/dashboard');
  } 
  
  // Properties
  getProperties() {
    return this.httpClient.get(this.API_URL + '/properties');
  }

  getProperty(id: number) {
    return this.httpClient.get(this.API_URL + '/properties/' + id);
  }

  // Customers
  getCustomers() {
    return this.httpClient.get(this.API_URL + '/customers');
  }

  getCustomer(id: number) {
    return this.httpClient.get(this.API_URL + '/customers/' + id);
  }

  // Leases
  getLeases(){
    return this.httpClient.get(this.API_URL + '/leases');
  }

  getLease(id: number){
    return this.httpClient.get(this.API_URL + '/leases/' + id);
  }  
}
