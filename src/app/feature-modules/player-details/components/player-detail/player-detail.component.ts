import { Component, Input } from '@angular/core';
import { Player } from '../../../../models/player';

@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.component.html',
  styleUrl: './player-detail.component.scss',
})
export class PlayerDetailComponent {
  @Input() player?: Player;
}
