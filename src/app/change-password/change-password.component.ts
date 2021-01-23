import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  constructor(fb:FormBuilder)
   {
     
      oldPassword:fb.control(['',Validators.required]);
      newPassword:fb.control(['',Validators.required]);
      confirmPassword:fb.array(['',Validators.required]);

    }

  ngOnInit(): void {
  }

}
