import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/_models/client.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss']
})
export class ClientListComponent implements OnInit {

  clients: Array<Client> = [];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getClients();
  }

  getClients() {
    this.apiService.getClients().subscribe((res: any) => {
      this.clients = res.data;
    });    
  }

}
