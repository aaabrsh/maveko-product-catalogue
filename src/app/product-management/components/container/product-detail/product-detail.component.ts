import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductDetail } from 'src/app/product-management/models/product-detail.model';
import { Product } from 'src/app/product-management/models/product.model';
import { ProductDetailQuery } from 'src/app/product-management/state/product-detail/product-detail.query';
import { ProductDetailService } from 'src/app/product-management/state/product-detail/product-detail.service';
import { ProductQuery } from 'src/app/product-management/state/product/product.query';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  boards:Observable<Product[]> = this.productQuery.selectAll();
  items:Observable<ProductDetail[]> = this.productDetailQuery.selectAll();


  constructor(private productDetailService:ProductDetailService ,
              private productDetailQuery:ProductDetailQuery,
              private productQuery:ProductQuery,
              private route:ActivatedRoute) { 
               
              }

  ngOnInit(): void {
    const product_id :any = this.route.snapshot.paramMap.get('id');                 
    this.productDetailService.show(product_id).subscribe();
    this.productDetailService.get(product_id).subscribe();

    
  }

}
