import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { SquadComponent } from './components/squad/squad.component';
import { PlayerDetailsModule } from '../player-details/player-details.module';
import { PositionComponent } from './components/position/position.component';

@NgModule({
  declarations: [SquadComponent, PositionComponent],
  imports: [CommonModule, TranslateModule, PlayerDetailsModule],
})
export class SquadBuilderModule {}
