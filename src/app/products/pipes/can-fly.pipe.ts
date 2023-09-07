import { Pipe, PipeTransform } from '@angular/core';

// true | canFly = 'Puede volar'
// false | canFly = 'No puede volar'

@Pipe({
  name: 'canFly'
})

export class CanFlyPipe implements PipeTransform {

  transform( value: boolean ): 'Puede volar' | 'No puede volar' {

    return value ? 'Puede volar' : 'No puede volar';
  }
}
