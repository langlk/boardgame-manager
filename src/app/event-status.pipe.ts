import { Pipe, PipeTransform } from '@angular/core';

import { Event } from './event.model';

@Pipe({
  name: 'eventStatus'
})
export class EventStatusPipe implements PipeTransform {

  transform(input, status) {
    var today = new Date(Date.now());
    if (status === "past") {
      return input.filter((event) => {
        var date = this.getDate(event.date);
        return date < today;
      });
    } else if (status === "future"){
      return input.filter((event) => {
        var date = this.getDate(event.date);
        return date >= today;
      });
    }
  }

  getDate(date: string) {
    return new Date(parseInt(date.slice(0,4)), parseInt(date.slice(5, 7)) - 1, parseInt(date.slice(8,10)));
  }

}
