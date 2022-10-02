import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-unit-of-measure-form',
  templateUrl: './unit-of-measure-form.component.html',
  styleUrls: ['./unit-of-measure-form.component.scss']
})
export class UnitOfMeasureFormComponent implements OnInit {
  responsedata: any;

  form = new FormGroup({
    name: new FormControl("", Validators.required),
    abbreviation: new FormControl("", Validators.required),
  });

  constructor(private service: ApiService) { }

  ngOnInit(): void { }

  submit(){
    if(this.form.valid){
      this.service.unitOfMeasurePost(this.form.value).subscribe(res => {
        if(res != null){
          this.responsedata = res;
          console.log(this.responsedata);
        }
      })
    }
  }

}
