import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/_models/client.model';
import { ApiService } from 'src/app/services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.scss']
})
export class ClientDetailComponent implements OnInit {

  client: Client;

  constructor(private apiService: ApiService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getClient();
  }

  getClient(): void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.apiService.getClient(id).subscribe((res: any) => {
      this.client = res.data;
    })
  }

}
