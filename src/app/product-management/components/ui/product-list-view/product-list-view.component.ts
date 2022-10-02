import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/product-management/models/product.model';

@Component({
  selector: 'app-product-list-view',
  templateUrl: './product-list-view.component.html',
  styleUrls: ['./product-list-view.component.scss']
})
export class ProductListViewComponent implements OnInit {

 @Input()cards: Product[] | null = [];
  constructor() { }

  ngOnInit(): void {
  }

}
