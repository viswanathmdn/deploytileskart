import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'status'
})
export class StatusPipe implements PipeTransform {

  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  // }

  transform(value: any, args?: any): any {
    if (value == 1){
      return "In Stock";
    }
    else
    {
      return "Not In Stock";
    }
  
  }
 

}
