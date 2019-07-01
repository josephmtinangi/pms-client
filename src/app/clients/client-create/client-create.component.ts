import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { Property } from 'src/app/_models/property.model';

@Component({
  selector: 'app-client-create',
  templateUrl: './client-create.component.html',
  styleUrls: ['./client-create.component.scss']
})
export class ClientCreateComponent implements OnInit {

  clientForm: FormGroup;
  properties: Array<Property> = [];
  submitted: boolean = false;
  success: boolean = false;
  loadProperties: boolean = false;
  errorMessage: string = null;

  constructor(
    private apiService: ApiService,
    private formBuilder: FormBuilder
  ) {
    this.clientForm = this.formBuilder.group({
      first_name: [''],
      middle_name: [''],
      last_name: [''],
      phone: [''],
      email: [''],
      photo: ['']
    });
  }

  ngOnInit() {
  } 

  store(){
    this.submitted = true;

    if(this.clientForm.invalid){
      return;
    }

    this.apiService.storeClient(this.clientForm.value).subscribe((res: any) => {
      if(res.status == 200){
        this.success = true;
        this.submitted = false;
        this.clientForm.reset();
      }
    },
    error => {
      this.success = false;
      this.submitted = false;
      this.errorMessage = error.message;
    });

  }

}
