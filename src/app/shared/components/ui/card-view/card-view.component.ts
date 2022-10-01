import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.scss']
})
export class CardViewComponent implements OnInit {


  @Input() cardTitle: string = '';
  @Input() cardImage: string = '';
  @Input() cardDescription:string = '';
  @Input() routerLink:string = '';
  constructor() { }

  ngOnInit(): void {
  }

}
