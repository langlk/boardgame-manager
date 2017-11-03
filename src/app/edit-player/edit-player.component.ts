import { Component, OnInit, Input } from '@angular/core';

import { Player } from '../player.model';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.css']
})

export class EditPlayerComponent implements OnInit {
  @Input() player: Player;
  days: string[] = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
  gameTypes: string[] = ["board", "card", "short", "medium", "long", "strategy", "social", "deception", "party"];

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
  }

  toggleFree(day: string) {
    if (this.player.daysFree[day]) {
      this.player.daysFree[day] = false;
    } else {
      this.player.daysFree[day] = true;
    }
  }

  togglePref(gameType: string) {
    var index = this.player.gameTypes.indexOf(gameType);
    if (index >= 0) {
      this.player.gameTypes.splice(index, 1);
    } else {
      this.player.gameTypes.push(gameType);
    }
    console.log(this.player);
  }

  capitalize(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  update() {
    this.playerService.updatePlayer(this.player);
  }

  delete() {
    if(confirm("Are you sure you want to permanently delete this record?")){
      this.playerService.deletePlayer(this.player);
    }
  }
}
