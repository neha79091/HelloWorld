import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent  {
  contactMethods=[
    {id:1,name:'Email'},
    {id:2,name:'Phone'},
    {id:3,name:'Mobile'},
    {id:4,name:'Social Media'}
  ];
log(x)
{console.log(x);}
submit(y)
{
  console.log(y);
}
   
}
