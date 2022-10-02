import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/product-management/models/product.model';
import { ProductQuery } from 'src/app/product-management/state/product/product.query';
import { ProductService } from 'src/app/product-management/state/product/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  cards: Observable<Product[]> = this.productQuery.selectAll();
  // cards = [
  //   {
  //     title: 'hello',
  //     description: 'description',
  //     image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
  //     routerLink:"/product-detail/1"
  //   },
  //   {
  //     title: 'hello',
  //     description: 'description',
  //     image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
  //     routerLink:"/"
  //   },
  //   {
  //     title: 'hello',
  //     description: 'description',
  //     image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
  //   },
  //   {
  //     title: 'hello',
  //     description: 'description',
  //     image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
  //   },
  //   {
  //     title: 'hello',
  //     description: 'description',
  //     image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
  //   },
  //   {
  //     title: 'hello',
  //     description: 'description',
  //     image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
  //   },
  //   {
  //     title: 'hello',
  //     description: 'description',
  //     image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
  //   },
  //   {
  //     title: 'hello',
  //     description: 'description',
  //     image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
  //   },
  //   {
  //     title: 'hello',
  //     description: 'description',
  //     image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
  //   }, {
  //     title: 'hello',
  //     description: 'description',
  //     image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
  //   },
  // ];
  constructor(private productQuery:ProductQuery,
              private productService:ProductService) {
                this,productService.get().subscribe();
  }

  ngOnInit(): void {}
}
