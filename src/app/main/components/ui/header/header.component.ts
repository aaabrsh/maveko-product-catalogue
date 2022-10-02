import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  value:string = '';
  @Input() orderCount: number = 0; 
  @Output() searchValue = new EventEmitter<string>();
  constructor() { }
 
  ngOnInit(): void {
  }

  searchValueChange(){ 
    this.searchValue.emit(this.value);
  }

}
