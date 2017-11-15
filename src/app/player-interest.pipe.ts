import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'playerInterest'
})
export class PlayerInterestPipe implements PipeTransform {

  transform(input, gameTypes): any {
    return input.filter(function(player) {
      if (input == null) {
        return [];
      }
      var add: boolean = true
      for (let i = 0; i < gameTypes.length; i++) {
        if (!player.gameTypes.includes(gameTypes[i])) {
          add = false;
        }
      }
      if (add) {
        return add;
      }
    });
  }

}
