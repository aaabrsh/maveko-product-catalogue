import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
  responsedata: any;

  form = new FormGroup({
    name: new FormControl("", Validators.required),
    description: new FormControl("", Validators.required),
    category: new FormControl("", Validators.required),
    supplier: new FormControl("", Validators.required),
    tag: new FormControl("", Validators.required),
  });


  constructor(private service: ApiService) { }

  ngOnInit(): void { }

  submit(){
    if(this.form.valid){
      this.service.productPost(this.form.value).subscribe(res => {
        if(res != null){
          this.responsedata = res;
          console.log(this.responsedata);
        }
      })
    }
  }
}
