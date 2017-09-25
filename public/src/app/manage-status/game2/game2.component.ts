import { Component, OnInit, Input } from '@angular/core';
import { PlayerServiceService } from '../../player-service.service';

@Component({
  selector: 'app-game2',
  templateUrl: './game2.component.html',
  styleUrls: ['./game2.component.css']
})
export class Game2Component implements OnInit {
  @Input() players;

  constructor(private _service: PlayerServiceService) {
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

  change(id){
    this.getPlayers();
    for (let i = 0; i < this.players.length; i++){
      if(this.players[i]._id == id){
        var player = this.players[i];
        if (player.game2 == true){
          player.game2  = false;
        }
        else{
          player.game2 = true;
        }
      }
    }

    this._service.updatePlayer(player)
    .then(player => this.getPlayers())
    .catch(err => console.log("Error with updating player"))
    

  }

}
