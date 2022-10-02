import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/main/models/menu.model';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {


  display = false;
  links = [{name:'DrinkWare', route:'/'},{name:'Pitchers', route:'/'},{name:'Bar Accessories', route:'/'},{name:'TableTopAccessories', route:'/'},
  {name:'PC Dessert Cup', route:'/'},{name:'Food DisplayWare', route:'/'},{name:'Food Service Trays and Cover', route:'/'},
  {name:'KitchenWare', route:'/'}];
 
  constructor() { }

  ngOnInit(): void {
  }
  showInfo(item:string){
    console.log('info');
    
  }

}
