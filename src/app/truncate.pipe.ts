import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(value: string, length: number = 10, ...args: unknown[]): string {
    return value.substring(0, length) + '...';
  }

}
