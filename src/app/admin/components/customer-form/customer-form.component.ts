import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.scss']
})
export class CustomerFormComponent implements OnInit {
  responsedata: any;

  form = new FormGroup({
    first_name: new FormControl("", Validators.required),
    last_name: new FormControl("", Validators.required),
    contact_information: new FormControl("", Validators.required),
    user: new FormControl("", Validators.required),
    address: new FormControl("", Validators.required),
  });

  constructor(private service: ApiService) { }

  ngOnInit(): void { }

  submit(){
    if(this.form.valid){
      this.service.customerPost(this.form.value).subscribe(res => {
        if(res != null){
          this.responsedata = res;
          console.log(this.responsedata);
        }
      })
    }
  }
}
