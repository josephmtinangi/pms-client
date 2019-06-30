import { Component, OnInit } from '@angular/core';
import { CustomerPayment } from 'src/app/_models/customer_payment.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-customer-payment-list',
  templateUrl: './customer-payment-list.component.html',
  styleUrls: ['./customer-payment-list.component.scss']
})
export class CustomerPaymentListComponent implements OnInit {

  customerPayments: Array<CustomerPayment> = [];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getCustomerPayments();
  }

  getCustomerPayments(){
    this.apiService.getCustomerPayments().subscribe((res: any) => {
      this.customerPayments = res.data;
    })
  }

}
