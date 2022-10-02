import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-currency-information-form',
  templateUrl: './currency-information-form.component.html',
  styleUrls: ['./currency-information-form.component.scss']
})
export class CurrencyInformationFormComponent implements OnInit {
  responsedata: any;

  form = new FormGroup({
    name: new FormControl("", Validators.required),
    aliass: new FormControl("", Validators.required),
  });

  constructor(private service: ApiService) { }

  ngOnInit(): void { }

  submit(){
    if(this.form.valid){
      this.service.currencyPost(this.form.value).subscribe(res => {
        if(res != null){
          this.responsedata = res;
          console.log(this.responsedata);
        }
      })
    }
  }

}
