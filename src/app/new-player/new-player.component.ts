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

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
  }

  addPlayer(name: string, gameTypesString: string, daysFreeString: string, favoriteGame: string) {
    var gameTypes: string[] = gameTypesString.split(' ');
    var daysFreeArray: string[] = daysFreeString.split(' ');
    var daysFree = {
      "sunday": false,
      "monday": false,
      "tuesday": false,
      "wednesday": false,
      "thursday": false,
      "friday": false,
      "saturday": false,
    }
    daysFreeArray.forEach((day) => {
      daysFree[day.toLowerCase()] = true;
    });
    var newPlayer = new Player(name, gameTypes, daysFree, favoriteGame);
    this.playerService.addPlayer(newPlayer);
  }

}
