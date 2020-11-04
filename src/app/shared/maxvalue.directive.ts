import { Directive, ElementRef , HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appMaxvalue]'
})
export class MaxvalueDirective {

  configuredValue:number;
  currentValue:number;

  

//   @HostListener('change') onvalueChange() {
//     let directiveValue = Number(this.el.nativeElement.attributes['appmaxvalue'].value);
//     let elementValue = Number(this.el.nativeElement.value);
//   if(directiveValue < elementValue){
//   console.log(`element value ${elementValue} is greater the ${directiveValue}`);
//   }
//  }
 
 

  constructor(private el:ElementRef , private renderer: Renderer2) {

    this.configuredValue= +el. nativeElement.attributes['appmaxvalue'].value;

    console.log(this.el.nativeElement);
console.log(this.el.nativeElement.parentElement); // access parentelement
 console.log(this.el.nativeElement.attributes['appmaxvalue'].value); //access the directive value
  }

  @HostListener('change') onvalueChange() {

    this.currentValue= +this.el.nativeElement.value;
    console.log(this.currentValue);
    // console.log(this.el.nativeElement);
    // console.log(this.el.nativeElement.attributes['appmaxvalue'].value);

    if(this.currentValue>this.configuredValue){
      console.log(this.renderer);
  
 const node = this.renderer.createElement('div'); //create div element
 let text = this.renderer.createText('value is more'); //create text
 this.renderer.appendChild(node,text);//append to div
 this.renderer.setAttribute(node,'id','errorMessage');// set id attribute
 this.renderer.addClass(node,'alert'); //add class attribute and update the value
 this.renderer.addClass(node,'alert-danger');
 this.renderer.appendChild(this.el.nativeElement.parentElement,node);
 this.renderer.setStyle(node,'margin-top','5px');
this.renderer.setStyle(node,'width','180px');

   }
  }


}
