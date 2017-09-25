import { Injectable } from '@angular/core';
import {Http } from '@angular/http';
import "rxjs";
import {Observable} from "rxjs";
import { Player } from './player';

@Injectable()
export class PlayerServiceService {
  players;
  
  constructor(private _http: Http) {
    this.getPlayers();
   }

  getPlayers(){
    console.log("Got to service");
    return this._http.get("/players").map(data => data.json()).toPromise()
  }

  addPlayer(player:Player){
    console.log("Got to service");
    return this._http.post("/players", player).map(data => data.json()).toPromise()
  }

  deletePlayer(id){
    console.log("Got to service");
    return this._http.delete("/players/" + id).map(data => data.json()).toPromise()
  }

  updatePlayer(player){
    console.log("Got the service, update");
    return this._http.put("/players/" + player._id, player).map(data => data.json()).toPromise()
    

  }



}
