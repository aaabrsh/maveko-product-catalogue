import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list-view',
  templateUrl: './product-list-view.component.html',
  styleUrls: ['./product-list-view.component.scss']
})
export class ProductListViewComponent implements OnInit {

  cardTitle:string ='The Card Title';
  cardDescription = 'The Card Description';
  cardImage = 'https://material.angular.io/assets/img/examples/shiba2.jpg' 
  routerLink = '/product-detail'
  constructor() { }

  ngOnInit(): void {
  }

}
