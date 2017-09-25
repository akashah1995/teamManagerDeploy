import { Component, OnInit } from '@angular/core';
import { PlayerServiceService } from '../player-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-manage-players',
  templateUrl: './manage-players.component.html',
  styleUrls: ['./manage-players.component.css']
})
export class ManagePlayersComponent implements OnInit {
  players;

  constructor(private _service: PlayerServiceService, private _router: Router) {
    this.getPlayers();
  }
  ngOnInit() {
  }

  getPlayers(){
    console.log("Getting the players");
    this._service.getPlayers()
    .then(players => this.players = players)
    .catch(err => console.log("Issue with getting players"))
  }

  statusChange(player){
    this.getPlayers();
  }



}
