import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/product-management/models/product.model';
import { ProductQuery } from 'src/app/product-management/state/product/product.query';
import { ProductService } from 'src/app/product-management/state/product/product.service';


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  orderCount$ = 0;
  constructor(private productQuery:ProductQuery,
              private productService:ProductService) { }

  ngOnInit(): void {
  }
  onSearchValueChange(searchValue: string) {
    const keyValue= {
      "payload":{
      'keyword':searchValue,
    }
  }
    this.productService.search(keyValue).subscribe();
  
  }

}
