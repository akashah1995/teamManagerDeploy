import { Component, OnInit } from '@angular/core';
import { PlayerServiceService } from '../../player-service.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {

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
    this._router.navigateByUrl('/roster/list');
  }

  delete(id){
    console.log(id);
    this._service.deletePlayer(id)
    .then(player => 
    console.log(player))
    .catch(err => console.log("There were issues deleting"))
    this.getPlayers();
    this._router.navigateByUrl('/roster/list');


  }
}

