import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-supplier-information-form',
  templateUrl: './supplier-information-form.component.html',
  styleUrls: ['./supplier-information-form.component.scss']
})
export class SupplierInformationFormComponent implements OnInit {
  responsedata: any;

  form = new FormGroup({
    company_name: new FormControl("", Validators.required),
    address: new FormControl("", Validators.required),
    contact_information: new FormControl("", Validators.required),
  });

  constructor(private service: ApiService) { }

  ngOnInit(): void { }

  submit(){
    if(this.form.valid){
      this.service.supplierPost(this.form.value).subscribe(res => {
        if(res != null){
          this.responsedata = res;
          console.log(this.responsedata);
        }
      })
    }
  }
}
