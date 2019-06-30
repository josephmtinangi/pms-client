import { Component, OnInit } from '@angular/core';
import { Lease } from 'src/app/_models/lease.model';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-lease-detail',
  templateUrl: './lease-detail.component.html',
  styleUrls: ['./lease-detail.component.scss']
})
export class LeaseDetailComponent implements OnInit {

  lease: Lease;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.getLease();
  }

  getLease(): void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.apiService.getLease(id).subscribe((res: any) => {
      this.lease = res.data;
    })
  }

}
