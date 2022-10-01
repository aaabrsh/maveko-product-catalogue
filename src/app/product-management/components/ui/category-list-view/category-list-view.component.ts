import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-list-view',
  templateUrl: './category-list-view.component.html',
  styleUrls: ['./category-list-view.component.scss']
})
export class CategoryListViewComponent implements OnInit {

  cardTitle:string ='The Card Title';
  cardDescription = 'The Card Description';
  cardImage = 'https://material.angular.io/assets/img/examples/shiba2.jpg' 
  constructor() { }

  ngOnInit(): void {
  }

}
