import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custompipe'
})
export class CustompipePipe implements PipeTransform {


  
  transform(value: unknown, ...args: any[]): any {
    return value;
  }

}
