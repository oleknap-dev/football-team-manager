import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './feature-modules/dashboard/components/dashboard/dashboard.component';
import { SquadComponent } from './feature-modules/squad-builder/components/squad/squad.component';
import { PlayersProfileComponent } from './feature-modules/player-details/components/players-profile/players-profile.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'player-profile', component: PlayersProfileComponent },
  { path: 'squad-builder', component: SquadComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
