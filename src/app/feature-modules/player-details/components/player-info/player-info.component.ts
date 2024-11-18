import { Component, Input } from '@angular/core';
import { Player } from '../../../../models/player';

@Component({
  selector: 'app-player-info',
  templateUrl: './player-info.component.html',
  styleUrl: './player-info.component.scss',
})
export class PlayerInfoComponent {
  @Input() player: Player | undefined;
}
