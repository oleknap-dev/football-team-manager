import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { PlayerDetailComponent } from './components/player-detail/player-detail.component';
import { PlayersListComponent } from './components/players-list/players-list.component';
import { PlayerInfoComponent } from './components/player-info/player-info.component';
import { PlayersProfileComponent } from './components/players-profile/players-profile.component';

@NgModule({
  declarations: [
    PlayerDetailComponent,
    PlayersListComponent,
    PlayerInfoComponent,
    PlayersProfileComponent,
  ],
  imports: [
    TranslateModule,
    CommonModule,
    MatSelectModule,
    MatFormFieldModule,
    FormsModule,
  ],
  exports: [
    PlayersListComponent,
    PlayerDetailComponent,
    PlayersProfileComponent,
    PlayerInfoComponent,
  ],
})
export class PlayerDetailsModule {}
