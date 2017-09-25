import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManagePlayersComponent } from './manage-players/manage-players.component';
import { ManageStatusComponent } from './manage-status/manage-status.component';
import { PlayerListComponent } from './manage-players/player-list/player-list.component';
import { PlayerAddComponent } from './manage-players/player-add/player-add.component';
import { Game1Component } from './manage-status/game1/game1.component';
import { Game2Component } from './manage-status/game2/game2.component';
import { Game3Component } from './manage-status/game3/game3.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/roster/list'},
  {path: 'roster', component: ManagePlayersComponent, children: [
    {path: 'list', component: PlayerListComponent},
    {path: 'add', component: PlayerAddComponent}
  ] },
  {path: 'status', component: ManageStatusComponent, children: [
    {path: 'game1', component: Game1Component},
    {path: 'game2', component: Game2Component},
    {path: 'game3', component: Game3Component}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
