import { Component, OnInit } from '@angular/core';

import { Player } from '../player.model';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-new-player',
  templateUrl: './new-player.component.html',
  styleUrls: ['./new-player.component.css'],
  providers: [PlayerService]
})
export class NewPlayerComponent implements OnInit {
  days: string[] = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
  gameTypeNames: string[] = ["board", "card", "short", "medium", "long", "strategy", "social", "deception", "party"];
  daysFree = {
    "sunday": false,
    "monday": false,
    "tuesday": false,
    "wednesday": false,
    "thursday": false,
    "friday": false,
    "saturday": false,
  }
  gameTypes: string[] = [];

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
  }

  addPlayer(name: string, favoriteGame: string) {
    var newPlayer = new Player(name, this.gameTypes, this.daysFree, favoriteGame);
    this.playerService.addPlayer(newPlayer);
    this.daysFree = {
      "sunday": false,
      "monday": false,
      "tuesday": false,
      "wednesday": false,
      "thursday": false,
      "friday": false,
      "saturday": false,
    }
    this.gameTypes = [];
  }

  toggleFree(day: string) {
    if (this.daysFree[day]) {
      this.daysFree[day] = false;
    } else {
      this.daysFree[day] = true;
    }
  }

  togglePref(gameType: string) {
    var index = this.gameTypes.indexOf(gameType);
    if (index >= 0) {
      this.gameTypes.splice(index, 1);
    } else {
      this.gameTypes.push(gameType);
    }
  }

}
