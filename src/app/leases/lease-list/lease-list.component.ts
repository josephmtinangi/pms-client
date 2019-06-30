import { Component, OnInit } from '@angular/core';
import { Lease } from 'src/app/_models/lease.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-lease-list',
  templateUrl: './lease-list.component.html',
  styleUrls: ['./lease-list.component.scss']
})
export class LeaseListComponent implements OnInit {

  leases: Array<Lease> = [];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getLeases();
  }

  getLeases() {
    this.apiService.getLeases().subscribe((res: any) => {
      this.leases = res.data;
    });
  }

}
