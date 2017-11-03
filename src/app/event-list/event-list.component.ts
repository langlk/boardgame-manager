import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';

import { Event } from '../event.model';
import { EventService } from '../event.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css'],
  providers: [EventService]
})

export class EventListComponent implements OnInit {
  events: FirebaseListObservable<any[]>;

  constructor(
    private router: Router,
    private eventService: EventService
  ) {}

  ngOnInit() {
    this.events = this.eventService.getEvents();
  }

  goTo(event) {
    this.router.navigate(['event', event.$key]);
  }
}
