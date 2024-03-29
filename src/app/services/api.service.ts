import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from '../_models/client.model';

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

  getAllProperties() {
    return this.httpClient.get(this.API_URL + '/properties/all');
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

  // Client invoices
  getClientInvoices(){
    return this.httpClient.get(this.API_URL + '/client-invoices');
  }

  getClientInvoice(id: number){
    return this.httpClient.get(this.API_URL + '/client-invoices/' + id);
  }

  // Client Payments
  getClientPayments(){
    return this.httpClient.get(this.API_URL + '/client-payments');
  } 

  getClientPayment(id: number){
    return this.httpClient.get(this.API_URL + '/client-payments/' + id);
  }   

  // Customer Payments
  getCustomerPayments(){
    return this.httpClient.get(this.API_URL + '/customer-payments');
  } 

  getCustomerPayment(id: number){
    return this.httpClient.get(this.API_URL + '/customer-payments/' + id);
  }  
  
  // Clients
  getClients(){
    return this.httpClient.get(this.API_URL + '/clients');
  }

  getClient(id: number) {
    return this.httpClient.get(this.API_URL + '/clients/' + id);
  }  

  storeClient(client: Client) {
    return this.httpClient.post(this.API_URL + '/clients', client);
  }

  // Download Invoice
  downloadInvoice(id: number): Observable<Blob> {
    // this.http refers to HttpClient. Note here that you cannot use the generic get<Blob> as it does not compile: instead you "choose" the appropriate API in this way.
    return this.httpClient.get(this.WEB_URL + '/invoices/' + id, { responseType: 'blob' });
  }   
}
