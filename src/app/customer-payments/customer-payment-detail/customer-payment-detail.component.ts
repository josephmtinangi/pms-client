import { Component, OnInit } from '@angular/core';
import { CustomerPayment } from 'src/app/_models/customer_payment.model';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-customer-payment-detail',
  templateUrl: './customer-payment-detail.component.html',
  styleUrls: ['./customer-payment-detail.component.scss']
})
export class CustomerPaymentDetailComponent implements OnInit {

  customerPayment: CustomerPayment;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.getCustomerPayment();
  }


  getCustomerPayment(): void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.apiService.getCustomerPayment(id).subscribe((res: any) => {
      this.customerPayment = res.data;
    })
  }

}
