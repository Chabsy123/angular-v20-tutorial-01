import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'naPipe'
})
export class NaPipePipe implements PipeTransform {

  transform(value: any): unknown {
    if (value !== null && value !== undefined && value !== '') {
      return value;
    } else {
      return "N/A";
    }
  }

}
