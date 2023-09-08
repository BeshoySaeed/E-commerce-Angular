import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'price',
})
export class PricePipe implements PipeTransform {
  transform(value: number): number | string {
    return value < 300 ? `Sale ${value}` : value;
  }
}
