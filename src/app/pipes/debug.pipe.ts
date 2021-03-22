import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'debug'
})
export class DebugPipe implements PipeTransform {

  transform(value: unknown): void {
    // tslint:disable-next-line:no-console
    console.debug(`Debug: ${value}`);
  }
}
