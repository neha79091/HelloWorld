import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-udemy',
  templateUrl: './udemy.component.html',
  styleUrls: ['./udemy.component.css']
})
export class UdemyComponent  {

  submit(course)
  {
    console.log(course);
  }
  courses=[
    {id:1,name:"AI"} ,
    {id:2,name:"Learn Angular"} ,
    {id:3,name:"MEAN Stack"} ,
  {id:4,name:"PYTHON"} ,
  {id:5,name:"MERN"} 
            ]
}
