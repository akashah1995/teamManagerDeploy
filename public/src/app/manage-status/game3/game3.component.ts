import { Component, OnInit, Input } from '@angular/core';
import { PlayerServiceService } from '../../player-service.service';

@Component({
  selector: 'app-game3',
  templateUrl: './game3.component.html',
  styleUrls: ['./game3.component.css']
})
export class Game3Component implements OnInit {
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
        if (player.game3 == true){
          player.game3  = false;
        }
        else{
          player.game3 = true;
        }
      }
    }

    this._service.updatePlayer(player)
    .then(player => this.getPlayers())
    .catch(err => console.log("Error with updating player"))
    

  }

}
