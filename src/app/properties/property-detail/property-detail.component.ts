import { Component, OnInit } from '@angular/core';
import { Property } from 'src/app/_models/property.model';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.scss']
})
export class PropertyDetailComponent implements OnInit {

  property: Property;

  constructor(private apiService: ApiService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getProperty();
  }

  getProperty():void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.apiService.getProperty(id).subscribe((res: any) => {
      this.property = res.data.property;
    })
  }  

}
