import { Pipe, PipeTransform } from '@angular/core';

import { format } from 'date-fns';

@Pipe({
  name: 'fnsDate'
})
export class FnsDatePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const d = new Date();
    return format(d, 'MM/Do/YYYY');
  }

}
