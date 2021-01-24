import { PasswordValidators } from './password.validators';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent  {

  form:FormGroup;

  constructor(fb:FormBuilder)
   {
     
    this.form= fb.group({
      oldPassword:['',Validators.required,PasswordValidators.verifyOldPassword],
      newPassword:['',Validators.required],
      confirmPassword:['',[Validators.required]]

     },
     {
      validator:PasswordValidators.shouldBeSame
     });
     console.log(this.form);
    }
    get oldPassword()
  {
    console.log(this.form);
    return this.form.get('oldPassword');
  }
  get newPassword()
  {
    console.log(this.form);
    return this.form.get('newPassword');
  }
  get confirmPassword()
  {
    console.log(this.form);
    return this.form.get('confirmPassword');
  }

  
}
