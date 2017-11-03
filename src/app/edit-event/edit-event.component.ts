import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Event } from '../event.model';
import { EventService } from '../event.service';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css'],
  providers: [EventService]
})
export class EditEventComponent implements OnInit {
  @Input() event: Event;

  constructor(
    private eventService: EventService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  delete() {
    if (confirm("Are you sure you want to delete this event?")) {
      this.eventService.deleteEvent(this.event);
      this.router.navigate(['events']);
    }
  }

}
