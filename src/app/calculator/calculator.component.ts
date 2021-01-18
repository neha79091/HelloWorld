import { CalculatorService } from './../calculator.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl:'./calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
   operand1: number;
   operand2:number;
   result;
   onKeyUp1()
  {
    
    console.log(this.operand1);
    //using only event //console.log($event.target.value)
  }
  onKeyUp2()
  {
    
    console.log(this.operand2);
    //using only event //console.log($event.target.value)
  }
  add()
  {this.result=0;
    this.result=Number(this.operand1) + Number(this.operand2);}
  minus()
  {this.result=0;
    this.result=this.operand1-this.operand2;}
  product()
  {this.result=0;
    this.result=this.operand1*this.operand2;}
  divide()
  {this.result=0;
    this.result=this.operand1/this.operand2;}
  constructor(service: CalculatorService) 
  {

   }

  ngOnInit(): void {
  }

}
