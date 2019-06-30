import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Customer } from 'src/app/_models/customer.model';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {

  customers: Array<Customer> = [];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getCustomers();
  }

  getCustomers():void {
    this.apiService.getCustomers().subscribe((res: any) => {
      this.customers = res.data;
    },
    error => {
      console.log(error);
    });
  }  

}
