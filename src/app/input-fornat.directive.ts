import { Directive ,ElementRef,HostListener} from '@angular/core';

@Directive({
  selector: '[appInputFornat]'
})
export class InputFornatDirective {

  constructor(private el:ElementRef) { }
  @HostListener('blur') onBlur()
  {
    let value :string =this.el.nativeElement.value;
    this.el.nativeElement.value=value.toLowerCase();
  }
  

}
