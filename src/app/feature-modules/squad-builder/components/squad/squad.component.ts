import { Component, OnInit } from '@angular/core';
import { positionLimits, Squad } from '../../../../models/squad';
import { SquadBuilderService } from '../../../../services/squad-builder.service';
import { Player } from '../../../../models/player';
import { Position } from '../../../../enums/position.enum';

@Component({
  selector: 'app-squad',
  templateUrl: './squad.component.html',
  styleUrl: './squad.component.scss',
})
export class SquadComponent implements OnInit {
  squad: Squad = {
    goalkeeper: [],
    defenders: [],
    midfielders: [],
    strikers: [],
  };
  private selectedPlayer: Player | null = null;
  private readonly positionLimits = positionLimits;

  constructor(
    private readonly squadBuilderService: SquadBuilderService,
  ) {}

  ngOnInit(): void {
    this.squadBuilderService.selectedPlayer.subscribe(
      (player: Player | null) => {
        this.selectedPlayer = player;
        if (this.selectedPlayer) {
          this.addPlayerToSquad();
        }
      }
    );
  }

  clearSquad(): void {
    this.squad = {
      goalkeeper: [],
      defenders: [],
      midfielders: [],
      strikers: [],
    };
    this.squadBuilderService.clearSquad();
  }
  private addPlayerToSquad() {
    const player = this.selectedPlayer;
    let squadRow: (Player | null)[] = [];
    const squad = this.squad;
    const playerPosition = player?.position;
    const positionLimit = this.positionLimits.find(
      limit => limit.type === playerPosition
    )!.limit;

    if (playerPosition === Position.Goalkeeper) {
      squadRow = squad.goalkeeper;
    } else if (playerPosition === Position.Defender) {
      squadRow = squad.defenders;
    } else if (playerPosition === Position.Midfielder) {
      squadRow = squad.midfielders;
    } else if (playerPosition === Position.Striker) {
      squadRow = squad.strikers;
    }

    if (squadRow.length < positionLimit && !squadRow.includes(player)) {
      squadRow.push(player);
    }
  }
}
