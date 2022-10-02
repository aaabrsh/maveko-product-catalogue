import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-contact-information-form',
  templateUrl: './contact-information-form.component.html',
  styleUrls: ['./contact-information-form.component.scss']
})
export class ContactInformationFormComponent implements OnInit {
  responsedata: any;

  form = new FormGroup({
    primary_phone_number: new FormControl("", Validators.required),
    secondary_phone_number: new FormControl("", Validators.required),
    fax: new FormControl("", Validators.required),
    email: new FormControl("", Validators.required),
  });

  constructor(private service: ApiService) { }

  ngOnInit(): void { }

  submit(){
    if(this.form.valid){
      this.service.contactPost(this.form.value).subscribe(res => {
        if(res != null){
          this.responsedata = res;
          console.log(this.responsedata);
        }
      })
    }
  }

}
