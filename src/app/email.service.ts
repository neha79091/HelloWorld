import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor() { }
  getEmail()
  {
    return ["email1","email2"];
  }
}
