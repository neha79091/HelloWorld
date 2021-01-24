
import { AbstractControl, ValidationErrors } from '@angular/forms';


export class PasswordValidators
{
    static shouldBeSame(control:AbstractControl)
    {
        
        let newPassword=control.get('newPassword');
        let confirmPassword=control.get('confirmPassword');
        
        
        if(confirmPassword.value!==newPassword.value)
        return{shouldBeSame:true};
        return {shouldBeSame:false};
    }
    static verifyOldPassword(control:AbstractControl):Promise<ValidationErrors|null>
    {
        
        return new Promise((resolve,reject)=>{
            setTimeout(()=>
            {
                if(control.value!=='oldPassword')
                resolve({verifyOldPassword:true});
                else resolve(null);
            },2000);
        });
    }
}