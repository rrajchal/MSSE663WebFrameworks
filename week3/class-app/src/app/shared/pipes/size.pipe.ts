import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'size',
})
export class SizePipe implements PipeTransform {
  transform(size: number): string {
    return `(${size}")`;
  }
}
