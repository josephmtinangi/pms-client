import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/_models/customer.model';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.scss']
})
export class CustomerDetailComponent implements OnInit {

  customer: Customer;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService   
  ) { }

  ngOnInit() {
    this.getCustomer()
  }

  getCustomer(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.apiService.getCustomer(id).subscribe((res: any) => {
      this.customer = res.data;
    });
  }  
}
