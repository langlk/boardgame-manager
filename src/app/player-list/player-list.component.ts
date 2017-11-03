import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';

import { Player } from '../player.model';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css'],
  providers: [PlayerService]
})
export class PlayerListComponent implements OnInit {
  players: FirebaseListObservable<any[]>;

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
    this.players = this.playerService.getPlayers();
  }

}
