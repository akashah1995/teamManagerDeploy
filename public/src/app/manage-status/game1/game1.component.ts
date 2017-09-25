import { Component, OnInit, Input } from '@angular/core';
import { PlayerServiceService } from '../../player-service.service';

@Component({
  selector: 'app-game1',
  templateUrl: './game1.component.html',
  styleUrls: ['./game1.component.css']
})
export class Game1Component implements OnInit {
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
        if (player.game1 == true){
          player.game1  = false;
        }
        else{
          player.game1 = true;
        }
      }
    }

    this._service.updatePlayer(player)
    .then(player => this.getPlayers())
    .catch(err => console.log("Error with updating player"))
    

  }





 

}
