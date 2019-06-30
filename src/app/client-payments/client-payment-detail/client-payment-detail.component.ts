import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { ClientPayment } from 'src/app/_models/client_payment.model';

@Component({
  selector: 'app-client-payment-detail',
  templateUrl: './client-payment-detail.component.html',
  styleUrls: ['./client-payment-detail.component.scss']
})
export class ClientPaymentDetailComponent implements OnInit {

  clientPayment: ClientPayment;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.getClientPayment();
  }


  getClientPayment(): void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.apiService.getClientPayment(id).subscribe((res: any) => {
      this.clientPayment = res.data;
    })
  }  

}
