import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  dashboard: any;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getDashboardData();
  }

  getDashboardData():void {
    this.apiService.getDashboardData().subscribe((res: any) => {
      this.dashboard = res.data;
    });    
  }  

}
