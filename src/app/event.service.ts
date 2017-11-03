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

  updateEvent(localEvent) {
    var eventEntry = this.findEvent(localEvent.$key);
    eventEntry.update({
      date: localEvent.date,
      name: localEvent.name,
      location: localEvent.location,
      gameTypes: localEvent.gameTypes
    })
  }

  deleteEvent(localEvent) {
    var eventEntry = this.findEvent(localEvent.$key);
    eventEntry.remove();
  }

}
