import { Component, OnInit } from '@angular/core';
import { Invoice } from 'src/app/_models/invoice.model';
import { Customer } from 'src/app/_models/customer.model';
import { Client } from 'src/app/_models/client.model';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { RealEstateAgent } from 'src/app/_models/real_estate_agent.model';

@Component({
  selector: 'app-client-invoice-detail',
  templateUrl: './client-invoice-detail.component.html',
  styleUrls: ['./client-invoice-detail.component.scss']
})
export class ClientInvoiceDetailComponent implements OnInit {

  invoice: Invoice;
  agent: RealEstateAgent;
  customer: Customer;
  client: Client;
  contract: any;
  schedule: any;

  constructor(private route: ActivatedRoute, private apiService: ApiService) { }

  ngOnInit() {
    this.getInvoice();
  }

  getInvoice():void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.apiService.getClientInvoice(id).subscribe((res: any) => {
      this.invoice = res.data.invoice;
      this.agent = res.data.agent;
      this.contract = res.data.contract;
      this.client = res.data.schedule.client;
      this.customer = res.data.schedule.customer_contract;    
      this.schedule = res.data.schedule;
    });
  }

  download(id: number) {
    this.apiService.downloadInvoice(id).subscribe((res: any) => {
      var newBlob = new Blob([res], { type: "application/pdf" });
    });
  }

}
