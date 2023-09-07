import { Pipe, PipeTransform } from '@angular/core';

// alexis | toggleCase = 'ALEXIS'
// ALEXIS | toggleCase = 'alexis'

@Pipe({
  name: 'toggleCase'
})

export class ToggleCasePipe implements PipeTransform {

  transform( value: string, toUpper: boolean = false ): string {

    return (toUpper )
    ? value.toUpperCase()
    : value.toLowerCase();
  }
}

