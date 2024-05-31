import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discount'
})
export class DiscountPipe implements PipeTransform {

  transform(value: number, ...args: number[]): number {
    let res = 0;
    args.forEach(item=>{
      console.log(item)
      
    });
    res = value * 10;
    return res;
  }

}
