import { Component, OnInit } from '@angular/core';
import { ClientPayment } from 'src/app/_models/client_payment.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-client-payment-list',
  templateUrl: './client-payment-list.component.html',
  styleUrls: ['./client-payment-list.component.scss']
})
export class ClientPaymentListComponent implements OnInit {

  clientPayments: Array<ClientPayment> = [];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getClientPayments();
  }

  getClientPayments(){
    this.apiService.getClientPayments().subscribe((res: any) => {
      this.clientPayments = res.data;
    })
  } 

}
