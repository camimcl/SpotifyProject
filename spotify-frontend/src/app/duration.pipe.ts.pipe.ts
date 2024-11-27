import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'durationPipeTs'
})
export class DurationPipeTsPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
