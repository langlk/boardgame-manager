import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import { Event } from './event.model';

@Injectable()
export class EventService {
  events: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.events = database.list('events');
  }

  getEvents() {
    return this.events;
  }

  findEvent(key: string) {
    return this.database.object('events/' + key);
  }

  addEvent(event: Event) {
    this.events.push(event);
  }

  deleteEvent(event) {
    var eventEntry = this.findEvent(event.$key);
    eventEntry.remove();
  }

}
