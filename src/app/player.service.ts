import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import { Player } from './player.model';

@Injectable()
export class PlayerService {
  players: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.players = database.list('players');
  }

  getPlayers() {
    return this.players;
  }

  findPlayer(key: string) {
    return this.database.object('players/' + key);
  }

  addPlayer(player: Player) {
    this.players.push(player);
  }

  updatePlayer(localPlayer) {
    var playerEntry = this.findPlayer(localPlayer.$key);
    playerEntry.update({
      name: localPlayer.name,
      gameTypes: localPlayer.gameTypes,
      daysFree: localPlayer.daysFree,
      favoriteGame: localPlayer.favoriteGame
    });
  }

}
