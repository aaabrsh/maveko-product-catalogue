import { Component, Input, OnInit } from '@angular/core';
import {  ActivatedRoute} from '@angular/router';
import { ProductDetail } from 'src/app/product-management/models/product-detail.model';
import { Product } from 'src/app/product-management/models/product.model';
import { ProductDetailService } from 'src/app/product-management/state/product-detail/product-detail.service';

@Component({
  selector: 'app-product-detail-view',
  templateUrl: './product-detail-view.component.html',
  styleUrls: ['./product-detail-view.component.scss']
})
export class ProductDetailViewComponent implements OnInit {

  @Input() boardTitle: string = '';
  @Input() boardImage: string = '';
  @Input() boardDescription:string = '';
  @Input() routerLink:string = '';
  @Input() items: ProductDetail[] | null= [];
  constructor(private productDetailService:ProductDetailService,
              private route:ActivatedRoute) { 
 
  }

  ngOnInit(): void {
    // const product_id:any = this.route.snapshot.paramMap.get('id');
    // this.productDetailService.get(product_id).subscribe();
  }

}
