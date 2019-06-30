import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Property } from 'src/app/_models/property.model';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.scss']
})
export class PropertyListComponent implements OnInit {

  properties: Array<Property> = [];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getProperties();
  }

  getProperties() {
    this.apiService.getProperties().subscribe((res: any) => {
      this.properties = res.data.data;
    });
  }
}
