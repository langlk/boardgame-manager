import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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
  @Output() eventUpdate = new EventEmitter();
  gameTypeNames: string[] = ["board", "card", "short", "medium", "long", "strategy", "social", "deception", "party"];

  constructor(
    private eventService: EventService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  togglePref(gameType: string) {
    var index = this.event.gameTypes.indexOf(gameType);
    if (index >= 0) {
      this.event.gameTypes.splice(index, 1);
    } else {
      this.event.gameTypes.push(gameType);
    }
  }

  update() {
    this.eventService.updateEvent(this.event);
    this.eventUpdate.emit();
  }

  delete() {
    if (confirm("Are you sure you want to delete this event?")) {
      this.eventService.deleteEvent(this.event);
      this.router.navigate(['events']);
    }
  }

  capitalize(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

}
