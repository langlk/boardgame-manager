import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { FirebaseObjectObservable } from 'angularfire2/database';

import { Player } from '../player.model';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.css'],
  providers: [PlayerService]
})
export class PlayerDetailComponent implements OnInit {
  @Input() listKey: string;
  playerKey: string;
  player;
  days: string[] = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private playerService: PlayerService
  ) { }

  ngOnInit() {
    if (!this.listKey) {
      this.route.params.forEach((urlParameters) => {
        this.playerKey = urlParameters['id'];
      });
    } else {
      this.playerKey = this.listKey;
    }
    this.player = this.playerService.findPlayer(this.playerKey);
  }

}
