import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location, DatePipe } from '@angular/common';

import { Event } from '../event.model';
import { EventService } from '../event.service';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css'],
  providers: [EventService]
})
export class EventDetailComponent implements OnInit {
  eventKey: string;
  event;
  editShow: boolean;

  constructor(
    private eventService: EventService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.eventKey = urlParameters['id'];
    });
    this.event = this.eventService.findEvent(this.eventKey);
  }

  edit() {
    this.editShow = true;
  }

  endEdit() {
    this.editShow = false;
  }

  getDate(date: string) {
    return new Date(parseInt(date.slice(0,4)), parseInt(date.slice(5, 7)) - 1, parseInt(date.slice(8,10)));
  }

  capitalize(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

}
