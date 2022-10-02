import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { ApiService } from '../../api.service';

@Component({
  selector: 'app-product-category-form',
  templateUrl: './product-category-form.component.html',
  styleUrls: ['./product-category-form.component.scss']
})
export class ProductCategoryFormComponent implements OnInit {
  responsedata: any;

  form = new FormGroup({
    name: new FormControl("", Validators.required),
    description: new FormControl("", Validators.required)
  });
  constructor(private service: ApiService) { }

  ngOnInit(): void {
  }

  submit(){
    if(this.form.valid){
      this.service.productCategoryPost(this.form.value).subscribe(res => {
        if(res != null){
          this.responsedata = res;
          console.log(this.responsedata);
        }
      })
    }
  }
}