import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent  {
  title:string;
  isFavourite:boolean;
  //isFavourite property is false by default
  constructor() { }
  onclick()
  {
    this.isFavourite=!this.isFavourite;
  }
  ngOnInit(): void {
  }

}
