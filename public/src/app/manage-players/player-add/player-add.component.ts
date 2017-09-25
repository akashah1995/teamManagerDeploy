import { Component, OnInit } from '@angular/core';
import { PlayerServiceService } from '../../player-service.service';
import { Player } from '../../player';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-player-add',
  templateUrl: './player-add.component.html',
  styleUrls: ['./player-add.component.css']
})
export class PlayerAddComponent implements OnInit {
  player = new Player();

  constructor(private _service: PlayerServiceService,private _router:Router ) { }

  addPlayer(){
    console.log("Adding player, client side");
    this._service.addPlayer(this.player)
    .then(player => this.player = new Player())
    .catch(err => console.log("Issue with adding a player"))
    this._router.navigateByUrl('/roster/list');
  }

  ngOnInit() {
  }

}
