import { EmailService } from '../email.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-email',
  template: `  
            <tr>
            <td [attr.colspan]="colspan"></td>
            </tr>
            <button class="btn btn-primary "[class.active]="isActive" (click)="onSave($event)">Save</button>
            <button class="btn btn-danger "[style.backgroundColor]="isActive?'blue':'green'">Save</button>
            <input (keyup)="onKeyUp($event)"/>
            
            <input [value]="email"(keyup.enter)="email=$event.target.value;onKeyUp1()"/>
            <input [(ngModel)]="email1"(keyup.enter)="onKeyUp2()"/><br/>
            <span class="glyphicon glyphicon-star"></span>`,
            //event filter appied on second input form
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {

  Emails;
  email;
  email1;
  isActive=false;
  onKeyUp($event)
  {
    if($event.keyCode===13) console.log("Enter was pressed");
  }
  onKeyUp1()
  {
    
    console.log(this.email);
    //using only event //console.log($event.target.value)
  }
  onKeyUp2()
  {
    
    console.log(this.email1);
    //using only event //console.log($event.target.value)
  }
  onSave($event)
  {
    console.log("Blue button was clicked",$event);
  }
  constructor(service:EmailService) 
  {
    this.Emails=service.getEmail();
   }
  colspan=2;
  ngOnInit(): void {
  }

}
