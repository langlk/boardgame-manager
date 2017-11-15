import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bestDays'
})
export class BestDaysPipe implements PipeTransform {

  transform(players, days, cutoff = 3) {
    if (days == null || players == null) {
      return []
    }
    let output = []
    days.forEach(function(day) {
      output.push([day, 0])
      players.forEach(function(player) {
        if (player.daysFree[day]) {
          output[output.length - 1][1] += 1;
        }
      });
    });
    output.sort(function(a, b) {
      return b[1] - a[1];
    });
    return output.slice(0, cutoff);
  }

}
