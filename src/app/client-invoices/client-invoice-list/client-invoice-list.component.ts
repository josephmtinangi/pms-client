import { Component, OnInit } from '@angular/core';
import { Invoice } from 'src/app/_models/invoice.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-client-invoice-list',
  templateUrl: './client-invoice-list.component.html',
  styleUrls: ['./client-invoice-list.component.scss']
})
export class ClientInvoiceListComponent implements OnInit {

  invoices: Array<Invoice> = [];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getInvoices();
  }

  getInvoices():void {
    this.apiService.getClientInvoices().subscribe((res: any) => {
      this.invoices = res.data;
    })
  }

  download(id: number) {
    this.apiService.downloadInvoice(id).subscribe((res: any) => {
      var newBlob = new Blob([res], { type: "application/pdf" });
    });
  } 
}
