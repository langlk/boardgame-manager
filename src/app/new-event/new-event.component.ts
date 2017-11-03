import { Component, OnInit } from '@angular/core';
import { Router } from  '@angular/router';

import { Event } from '../event.model';
import { EventService } from '../event.service';
import { Player } from '../player.model';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-new-event',
  templateUrl: './new-event.component.html',
  styleUrls: ['./new-event.component.css'],
  providers: [
    PlayerService,
    EventService
  ]
})

export class NewEventComponent implements OnInit {
  days: string[] = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
  gameTypeNames: string[] = ["board", "card", "short", "medium", "long", "strategy", "social", "deception", "party"];
  gameTypes: string[] = [];

  constructor(
    private playerService: PlayerService,
    private eventService: EventService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  addEvent(name: string, location: string, date: string) {
    var newEvent = new Event(date, name, location, this.gameTypes);
    this.eventService.addEvent(newEvent);
    this.router.navigate(['events'])
  }

  togglePref(gameType: string) {
    var index = this.gameTypes.indexOf(gameType);
    if (index >= 0) {
      this.gameTypes.splice(index, 1);
    } else {
      this.gameTypes.push(gameType);
    }
  }

  capitalize(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

}
