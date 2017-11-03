import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalization'
})
export class CapitalizationPipe implements PipeTransform {

  transform(input: string){
    return input.charAt(0).toUpperCase() + input.slice(1);
  }

}
